
The frontend GUI for the AI-Assistant must provide:
1. Microphone audio stream
2. Diagnostics
3. Managers
	- Skills
	- Commands
	- Processes
	- Paired Devices
4. Persona Emulators
	- FACE
	- TUTOR



### 1. Microphone Audio Stream

#### useAudioRecorder.tsx

- A hook that manages the audio stream and microphone permissions.

```typescript
import { useRef, useState } from 'react';

// Component props
export type Props = {
  timeslice?: number;
  mimeType?: string;
  audioBitsPerSecond?: number;
}

export type OnDataCallback = NonNullable<MediaRecorder['ondataavailable']>;

// Defaults
export const DEFAULTS: Required<Props> = {
  timeslice: 1000, // 1000 milliseconds = 1 second
  mimeType: 'audio/webm',
  audioBitsPerSecond: 256000, // 16000 * 16
}

export function useAudioRecorder(props: Props = {}) {
  
  // Set defaults
  const propsWithDefaults: Required<Props> = Object.assign({}, DEFAULTS, props)
  
  // Get props
  const { timeslice, mimeType, audioBitsPerSecond } = propsWithDefaults;
  
  // Current (in-use) MediaRecorder.
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [live, setLive] = useState(false);
  
  const onDataCallbackRef = useRef<OnDataCallback>();
  const onData = (onDataCallback: OnDataCallback) => {
    onDataCallbackRef.current = onDataCallback;
  }

  const start = async () => {
    // Get the audio stream (asks user for permission).
    /* https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia  */
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    // Instantiate MediaRecorder object and assign "onData" handler.
    /* https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder */
    const mediaRecorder = new MediaRecorder(stream, { 
      mimeType, 
      audioBitsPerSecond
    });

    const onDataBound = onDataCallbackRef.current?.bind(mediaRecorder);
    const currentOnData = mediaRecorder.ondataavailable?.bind(mediaRecorder);
    // Bind the onData prop to the new MediaRecorder instance,
    // and then assign it as the ondataavailable handler.
    mediaRecorder.ondataavailable = (blobEvent)=> {
      if(currentOnData) currentOnData(blobEvent);
      if(onDataBound) onDataBound(blobEvent);
    }
    
    // Set the live flag
    setLive(true);

    // Start MediaRecorder and create chunks every "timeslice";
    mediaRecorder.start(timeslice); 
    
    // Set a reference to this MediaRecorder object so that it can be turned off later.
    setMediaRecorder(mediaRecorder);   
  }

  const stop = () => {
    if(mediaRecorder) {
      mediaRecorder.stop();
      setMediaRecorder(null);
    }
    if(live) {
      setLive(false);
    }
  }

  return {
    live, mediaRecorder, onData, start, stop
  }
}
```

#### WebSocketContext.tsx

- Encapsulates the websocket connection.

```typescript
import { FC, PropsWithChildren, createContext, useContext } from "react";
import ReconnectingWebSocket from 'reconnecting-websocket';

// Prevent websockets from being recreated
const websockets: { [url: string]: WebSocket } = {};

type ProviderProps = FC<PropsWithChildren<{url: string}>>;
type ContextProps = { websocket: WebSocket; };

// "undefined as any" is a hacky workaround to keep typescript quiet.
export const WebSocketContext = createContext<ContextProps>(undefined as any)

// The provider initializes the websocket and then provides it to components beneath it.
export const WebsocketProvider:  ProviderProps = ({ children, url }) => {
  websockets[url] = websockets[url] || new ReconnectingWebSocket(url) as WebSocket;
  
  return (
    <WebSocketContext.Provider value={{ websocket: websockets[url] }}>
      {children}
    </WebSocketContext.Provider>
  );
}

// A hook for getting the current context
export const useWebSocketContext = () => {
  return useContext(WebSocketContext);
}

// A hook for getting only the websocket from the current context
export const useWebSocket = () => {
  const { websocket } = useWebSocketContext();
  return websocket;
}
```




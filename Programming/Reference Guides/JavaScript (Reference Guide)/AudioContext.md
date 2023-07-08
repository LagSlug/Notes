
## Table of Contents

- [1. Introduction](#1.%20Introduction)
- [2. Creating an AudioContext](#2.%20Creating%20an%20AudioContext)
- [3. AudioContext Methods](#3.%20AudioContext%20Methods)
- [4. Example Usage](#4.%20Example%20Usage)
- [5. Full Demo](#5.%20Full%20Demo)

---

## 1. Introduction

- `AudioContext` is a built-in JavaScript interface for handling audio operations.
- It can control the creation of nodes, the overall audio routing, and the execution of the audio processing or decoding.

---

## 2. Creating an AudioContext

- You create an `AudioContext` like this:

```javascript
var audioContext = new AudioContext();
```

---

## 3. AudioContext Methods

- `createOscillator`: This method creates an OscillatorNode which is used to generate waveforms or signals.

```javascript
var oscillator = audioContext.createOscillator();
```

- `createGain`: This method creates a GainNode which can control the volume of the audio signal.

```javascript
var gainNode = audioContext.createGain();
```

- `createMediaElementSource`: This method creates a MediaElementAudioSourceNode which is used to play audio from an HTML5 audio or video element.

```javascript
var audioElement = document.querySelector('audio');
var source = audioContext.createMediaElementSource(audioElement);
```

---

## 4. Example Usage

- Below is an example of how to create an oscillator, connect it to a gain node, and then start the oscillator.

```javascript
var audioContext = new AudioContext();
var oscillator = audioContext.createOscillator();
var gainNode = audioContext.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioContext.destination);

oscillator.start();
```

- The oscillator generates a signal, which is then routed through the gain node to control the volume.
- Finally, the signal is sent to the audio output device (speakers, headphones, etc.).

---

## 5. Full Demo

- A comprehensive example of using `AudioContext` in a tone generator application:

```javascript
// Initialize an AudioContext instance
var audioContext = new AudioContext();

// Initialize an OscillatorNode
var oscillator = audioContext.createOscillator();

// Initialize a GainNode
var gainNode = audioContext.createGain();

// Set the oscillator waveform to a sine wave
oscillator.type = 'sine';

// Set the frequency of the oscillator to 440Hz (equivalent to the musical note A)
oscillator.frequency.value = 440;

// Connect the oscillator to the gain node
oscillator.connect(gainNode);

// Reduce the volume to 10% of the original volume using the gain node
gainNode.gain.value = 0.1;

// Connect the gain node to the destination (output device)
gainNode.connect(audioContext.destination);

// Start the oscillator
oscillator.start();

// Stop the oscillator after 2 seconds
setTimeout(function() {
    oscillator.stop();
}, 2000);
```

- This code generates a 440Hz sine wave for 2 seconds with a volume reduced to 10% of the original. 
- Modifications to this code can allow for different tone frequencies or more complex sounds by combining multiple oscillators.

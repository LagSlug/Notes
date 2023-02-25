
### Balabolka
```
Balabolka is a Text-To-Speech (TTS) program. All computer voices installed on your system are available to Balabolka. The on-screen text can be saved as an audio file. The program can read the clipboard content, extract text from documents, customize font and background colour, control reading from the system tray or by the global hotkeys. Balabolka supports text file formats: AZW, AZW3, CHM, DjVu, DOC, DOCX, EML, EPUB, FB2, FB3, HTML, LIT, MD, MOBI, ODP, ODS, ODT, PDB, PRC, PDF, PPT, PPTX, RTF, TCR, WPD, XLS, XLSX.
```
- http://balabolka.site/balabolka.htm



### AutoHotKey Solution

```

#InstallKeybdHook
#NoTrayIcon

tts := new TTS()


+*SC175::tts.ToggleSpeak("")
^+*SC175::tts.NextVoice()

*SC175::            ; the "nitro" key

WinActive("A")                           ; sets last found window
ControlGetFocus, ctrl
if (RegExMatch(ctrl, "A)Edit\d+"))       ; attempt copying without clipboard
    ControlGet, text, Selected,, %ctrl%  
else {                                   ; fallback solution
    clipboardOld := Clipboard            ; backup clipboard
    Send, ^c                             ; copy selected text to clipboard
    if (Clipboard != clipboardOld) {
        text := Clipboard                ; store selected text
        Clipboard := clipboardOld        ; restore clipboard contents
    }
}

tts.speak(text)

return

; TTS found here: https://www.autohotkey.com/boards/viewtopic.php?t=58453

Class TTS {
    VoiceList := []
    VoiceAssoc := {}
    VoiceCount := 0
    VoiceNumber := 0
    VoiceName := ""
    
    __New(){
        this.oVoice := ComObjCreate("SAPI.SpVoice")
        this._GetVoices()
        this.SetVoice(this.VoiceList.1)
    }

    ToggleSpeak(text){
        Status := this.oVoice.Status.RunningState
        if Status = 1
        this.oVoice.Speak(text,0x1)
        Else if Status = 0
        {
            this.oVoice.Resume
            this.oVoice.Speak("",0x1|0x2)
            this.oVoice.Speak(text,0x1)
        }
        Else if Status = 2
        this.oVoice.Speak("",0x1|0x2)
    }

    Speak(text){
        Status := this.oVoice.Status.RunningState
        if Status = 0
        this.oVoice.Resume
        this.oVoice.Speak("",0x1|0x2)
        this.oVoice.Speak(text,0x1)
    }
    
    SpeakWait(text){
        Status := this.oVoice.Status.RunningState
        if Status = 0
        this.oVoice.Resume
        this.oVoice.Speak("",0x1|0x2)
        this.oVoice.Speak(text,0x0)
    }

    Pause(){
        Status := this.oVoice.Status.RunningState
        if Status = 0
        this.oVoice.Resume
        else if Status = 2
        this.oVoice.Pause
    }
    
    Stop(){
        Status := this.oVoice.Status.RunningState
        if Status = 0
        this.oVoice.Resume
        this.oVoice.Speak("",0x1|0x2)
    }
    
    SetRate(rate){
        this.oVoice.Rate := rate
    }
    
    SetVolume(vol){
        this.oVoice.Volume := vol
    }
    
    SetPitch(pitch){
        this.oVoice.Speak("<pitch absmiddle = '" pitch "'/>",0x20)
    }

    SetVoice(VoiceName){
        if (!ObjHasKey(this.VoiceAssoc, VoiceName))
            return 0
        While !(this.oVoice.Status.RunningState = 1)
        Sleep, 20
        this.oVoice.Voice := this.oVoice.GetVoices("Name=" VoiceName).Item(0)
        this.VoiceName := VoiceName
        this.VoiceNumber := this.VoiceAssoc[VoiceName]
        return 1
    }

    SetVoiceByIndex(VoiceIndex){
        return this.SetVoice(this.VoiceList[VoiceIndex])
    }

    NextVoice(){
        v := this.VoiceNumber + 1
        if (v > this.VoiceCount)
            v := 1
        return this.SetVoiceByIndex(v)
    }
    
    GetVoices(){
        return this.VoiceList
    }

    GetStatus(){
        Status := this.oVoice.Status.RunningState
        if Status = 0
        Return "paused"
        Else if Status = 1
        Return "finished"
        Else if Status = 2
        Return "reading"
    }
    
    GetCount(){
        return this.VoiceCount
    }
    
    SpeakToFile(param1, param2){
        oldAOS := this.oVoice.AudioOutputStream
        oldAAOFCONS := this.oVoice.AllowAudioOutputFormatChangesOnNextSet
        this.oVoice.AllowAudioOutputFormatChangesOnNextSet := 1	
        
        SpStream := ComObjCreate("SAPI.SpFileStream")
        FileDelete, % param2
        SpStream.Open(param2, 3)
        this.oVoice.AudioOutputStream := SpStream
        this.TTS("SpeakWait", param1)
        SpStream.Close()
        this.oVoice.AudioOutputStream := oldAOS
        this.oVoice.AllowAudioOutputFormatChangesOnNextSet := oldAAOFCONS
    }

    _GetVoices(){
        this.VoiceList := []
        this.VoiceAssoc := {}
        this.VoiceCount := this.oVoice.GetVoices.Count
        Loop, % this.VoiceCount
        {
            Name := this.oVoice.GetVoices.Item(A_Index-1).GetAttribute("Name")
            this.VoiceList.push(Name)
            this.VoiceAssoc[Name] := A_Index
        }
    }
}

```
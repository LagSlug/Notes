
### AutoHotKey

https://www.autohotkey.com/

- Define hotkeys for the mouse and keyboard, remap keys or buttons and autocorrect-like replacements.
- Easily create small to complex scripts for all kinds of tasks such as: form fillers, auto-clicking, macros, etc.

Notes:
- I used this to disabled the "Nitro" key on my laptop.

### Espanso
- Watches text input for "trigger" phrases that are automatically replaced with new text.
- For example typing ":pi:" can be used to trigger Espanso, which will replace ":pi:" with "π".

Notes:
- Rules can typically be edited/found in this directory:
```shell
C:\Users\{user}\AppData\Roaming\espanso
```
- However if that path has changed it can be discovered with this command:
```shell
$ espanso path
```

Output:
```bash
Config: C:\Users\Robert\AppData\Roaming\espanso 
Packages: C:\Users\Robert\AppData\Roaming\espanso\match\packages                                                        
Runtime: C:\Users\Robert\AppData\Local\espanso 
```

- "Packages" are available with premade rulesets, they can be found here:
  https://hub.espanso.org/search
- Some useful packages are:
	- greek-letters-alt
	- tholzschuh-maths
- Packages are installed through the command line:
```shell
espanso install {package-name}
```

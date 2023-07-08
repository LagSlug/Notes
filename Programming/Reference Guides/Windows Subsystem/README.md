
### Install

```PowerShell
wsl --install
```

- Reboot after installation.

### Manual Installation / Update to WSL 2

- https://learn.microsoft.com/en-us/windows/wsl/install-manual
  
1) Enable the Windows Subsystem for Linux

```PowerShell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

2) Check requirements for running WSL 2
	Windows 10
	-   For x64 systems: **Version 1903** or later, with **Build 18362** or later.
	-   For ARM64 systems: **Version 2004** or later, with **Build 19041** or later.
  
	Windows 11
	- Any build.
	  
	To check version, select Windows logo key + R, type winver, then select OK.
	
3) Enable Virtual Machine feature
   - Your machine will require [virtualization capabilities](https://learn.microsoft.com/en-us/windows/wsl/troubleshooting#error-0x80370102-the-virtual-machine-could-not-be-started-because-a-required-feature-is-not-installed) to use this feature.

```PowerShell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

4) Download the Linux kernel update package
   - [WSL2 Linux kernel update package for x64 machines](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

5) Set WSL 2 as your default version

```PowerShell
wsl --set-default-version 2
```


### Install Linux Distro (a specific Linux operating system)

- Ubuntu (most recent) LTS:

```PowerShell
wsl --install -d Ubuntu
```

- Ubuntu 20.04 LTS:

```PowerShell
wsl --install -d Ubuntu-20.04
```

### Remove Linux Distro

```
wsl --unregister [Name]
```

- Name is case-sensitive.

### Install GUI 

- GUI stands for Graphic User Interface

1) update Ubuntu
```sh
sudo apt update
```

2) upgrade Ubuntu
```sh
sudo apt full-upgrade
```

3) (optional, but recommended) enable Systemd

```sh
sudo touch /etc/wsl.conf && \
sudo tee -a /etc/wsl.conf << EOF
[boot]
systemd=true
EOF
```
- Not sure if this step is necessary any longer

4) Restart Distro

- In Windows PowerShell, restart the virtual machine (the Linux operating system).

```PowerShell
wsl --shutdown
```

- Restart the virtual machine. Running "wsl" without any parameters will launch the default virtual machine.

```PowerShell
wsl
```

5) Install x11-apps
```sh
sudo apt install x11-apps
```

### Help

```
Usage: wsl.exe [Argument] [Options...] [CommandLine]

Arguments for running Linux binaries:

    If no command line is provided, wsl.exe launches the default shell.

    --exec, -e <CommandLine>
        Execute the specified command without using the default Linux shell.

    --shell-type <Type>
        Execute the specified command with the provided shell type.

        Types:
            standard
                Execute the specified command using the default Linux shell.

            login
                Execute the specified command using the default Linux shell as a login shell.

            none
                Execute the specified command without using the default Linux shell.

    --
        Pass the remaining command line as-is.

Options:
    --cd <Directory>
        Sets the specified directory as the current working directory.
        If ~ is used the Linux user's home path will be used. If the path begins
        with a / character, it will be interpreted as an absolute Linux path.
        Otherwise, the value must be an absolute Windows path.

    --distribution, -d <Distro>
        Run the specified distribution.

    --user, -u <UserName>
        Run as the specified user.

    --system
        Launches a shell for the system distribution.

Arguments for managing Windows Subsystem for Linux:

    --help
        Display usage information.

    --debug-shell
        Open a WSL2 debug shell for diagnostics purposes.

    --event-viewer
        Opens the application view of the Windows Event Viewer.

    --install [Distro] [Options...]
        Install a Windows Subsystem for Linux distribution.
        For a list of valid distributions, use 'wsl.exe --list --online'.

        Options:
            --no-launch, -n
                Do not launch the distribution after install.

            --web-download
                Download the distribution from the internet instead of the Microsoft Store.

    --mount <Disk>
        Attaches and mounts a physical or virtual disk in all WSL 2 distributions.

        Options:
            --vhd
                Specifies that <Disk> refers to a virtual hard disk.

            --bare
                Attach the disk to WSL2, but don't mount it.

            --name <Name>
                Mount the disk using a custom name for the mountpoint.

            --type <Type>
                Filesystem to use when mounting a disk, if not specified defaults to ext4.

            --options <Options>
                Additional mount options.

            --partition <Index>
                Index of the partition to mount, if not specified defaults to the whole disk.

    --release-notes
        Opens a web browser to view the WSL release notes page.

    --set-default-version <Version>
        Changes the default install version for new distributions.

    --shutdown
        Immediately terminates all running distributions and the WSL 2
        lightweight utility virtual machine.

    --status
        Show the status of Windows Subsystem for Linux.

    --unmount [Disk]
        Unmounts and detaches a disk from all WSL2 distributions.
        Unmounts and detaches all disks if called without argument.

    --update
        Update the Windows Subsystem for Linux package.

        Options:
            --web-download
                Download the update from the internet instead of the Microsoft Store.

            --pre-release
                Download a pre-release version if available. Implies --web-download.

    --version, -v
        Display version information.

Arguments for managing distributions in Windows Subsystem for Linux:

    --export <Distro> <FileName> [Options]
        Exports the distribution to a tar file.
        The filename can be - for standard output.

        Options:
            --vhd
                Specifies that the distribution should be exported as a .vhdx file.

    --import <Distro> <InstallLocation> <FileName> [Options]
        Imports the specified tar file as a new distribution.
        The filename can be - for standard input.

        Options:
            --version <Version>
                Specifies the version to use for the new distribution.

            --vhd
                Specifies that the provided file is a .vhdx file, not a tar file.
                This operation makes a copy of the .vhdx file at the specified install location.

    --import-in-place <Distro> <FileName>
        Imports the specified .vhdx file as a new distribution.
        This virtual hard disk must be formatted with the ext4 filesystem type.

    --list, -l [Options]
        Lists distributions.

        Options:
            --all
                List all distributions, including distributions that are
                currently being installed or uninstalled.

            --running
                List only distributions that are currently running.

            --quiet, -q
                Only show distribution names.

            --verbose, -v
                Show detailed information about all distributions.

            --online, -o
                Displays a list of available distributions for install with 'wsl.exe --install'.

    --set-default, -s <Distro>
        Sets the distribution as the default.

    --set-version <Distro> <Version>
        Changes the version of the specified distribution.

    --terminate, -t <Distro>
        Terminates the specified distribution.

    --unregister <Distro>
        Unregisters the distribution and deletes the root filesystem.
        
```


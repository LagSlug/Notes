
### How to get rid of :Zone.Identifier files

- Open Windows "Run" command dialog (Windows Key + R)
- Run gpedit.msc (must be installed on non-professional versions of Windows)
- Go to the policy:
  
  User configuration \> Administrative templates \>Windows Components \> Attachment Manager
  
- Enable "Do not preserve zone information in file attachments"

![](Software/Windows/annoyances/attachments/Zone.Identifier%20Files.png)


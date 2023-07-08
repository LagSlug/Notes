# Overview

1. Host Web Page
	- The host web page is what the web extension is operating on.
	- Provides a limited API to the extension, and keeps data in a sandbox.
1. Browser API
	- The `browser` object is on the global object.
	- Subclasses are provided by the `browser` object for accessing the API:
	  1. 
1. Content Script
	- Runs javascript in the context of  he host web page.
	- Has limited access to the host web page's context.

2. Background Script
	- Runs javascript in its own sandbox, on a separate thread.

3. Action
	- The web extension toolbar button.
	- Allows the creation of a popup menu for applying changes to the web extension.

4. Sidebar
	- A vertical space that host a web application.
	- Larger area for user interface elements.

5. Installation
	- Web extensions can listen for their own installation.
	- Allows a welcome page for incoming users.

# Host Web Page

- The host web page is sandboxed from web applications to prevent leaking sensitive details or interferring with site operations.
- Variables 
  
### Restricted Sites

- Browsers restrict web applications from operating on some domains for security purposes.
- For example, when a user installs an application while at addons.mozilla.org, the web application will not operate until the user has navigated to an unrestricted domain.

#### Firefox

- accounts-static.cdn.mozilla.net
- accounts.firefox.com
- addons.cdn.mozilla.net
- addons.mozilla.org
- api.accounts.firefox.com
- content.cdn.mozilla.net
- discovery.addons.mozilla.org
- install.mozilla.org
- oauth.accounts.firefox.com
- profile.accounts.firefox.com
- support.mozilla.org
- sync.services.mozilla.com


# Content Scripts

- Content scripts can be loaded from either:
	1. a configuration element in the `manifest.json` file
	2. the `browser` object.


### Manifest.json

```json
{
	"manifest_version": 3,
	"content_scripts": [
	  {
	    "matches": ["*://*.mozilla.org/*"],
	    "js": ["jquery.js", "content-script.js"]
	  }
	]
}
```

# Installation

https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/
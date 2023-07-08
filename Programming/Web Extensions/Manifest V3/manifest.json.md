
```
{
	"manifest_version": 3,
	"name": "Timeline Scrubber",
	"description": "Deletes your social media timeline on Twitter.",
	"icons": {
		"32": "icons/leftpad-32.png"
	},
	"permissions": [ "activeTab", "scripting", "tabs" ],
	"background": {
		"scripts": [
			"browser-polyfill.js",
			"background.entry.js"
		]
	},
	"action": {
		"default_icon": "icons/leftpad-32.png",
		"default_title": "Timeline Scrubber"
	},

	"sidebar_action": {
		"default_title": "Timeline Scrubber",
		"default_panel": "side-panel/side-panel.html",
		"default_icon": "icons/leftpad-32.png",
		"open_at_install": false
	},	
	
	"content_scripts": [
		{
			"run_at": "document_idle",
			"matches": ["*://*.twitter.com/*"],
			"js": ["./content/main.entry.js"]
		}
	]
}

```


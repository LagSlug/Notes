

<%*
	function isQuote(char) {
		if(char === '`' || char === '"' || char === "'") return true;
		return false;
	}
	
	var s = tp.file.selection()
	while(isQuote(s[0])) {
		s = s.substring(1);
	}
	while(isQuote(s[s.length - 1])) {
		s = s.substring(0, s.length - 1);
	}

	var pretty = tp.user.pretty_print_js(s);
	return ('```typescript\n' + pretty + '\n```');
%>
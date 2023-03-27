<%*

	var selection = tp.file.selection();
	var tabbedSelection = selection.split('\n').map(line=>'\t' + line).join('\n');
	return `<div style="display: flex; justify-content: center;">\n` 
		+ tabbedSelection 
		+ `\n</div>`
	
%>
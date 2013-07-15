(function(){

var theClass = '#CQ .cq-editrollover-highlight-left';

var element = 'opacity';
var value = '0';
//var value = 'none !important';
var cssRules;


for (var S = 0; S < document.styleSheets.length; S++){
	if (document.styleSheets[S]['rules']) {
		cssRules = 'rules';
	} else if (document.styleSheets[S]['cssRules']) {
		cssRules = 'cssRules';
	} else {
	//no rules found... browser unknown
	}
	for (var R = 0; R < document.styleSheets[S][cssRules].length; R++) {
		if (document.styleSheets[S][cssRules][R].selectorText == theClass) {
			alert("Selector Found! Sheet: " + S + "    Rule: " + R + "    Selector: "+ document.styleSheets[S][cssRules][R].selectorText);
			document.styleSheets[S][cssRules][R].style[element] = value;
			break;
		}
	}
}

	

alert("script run...");
})();

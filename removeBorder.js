(function(){

var theClass = '.cq-editrollover-highlight-left';

var element1 = 'display';
var value1 = 'none !important';

ruleChanger(theClass, element1, value1);
function ruleChanger(selector, rule, value) {
	for (var S = 0; S < document.styleSheets.length; S++){
		if (document.styleSheets[S]['rules']) {
			cssRules = 'rules';
		} else if (document.styleSheets[S]['cssRules']) {
			cssRules = 'cssRules';
		} else {
		//no rules found... browser unknown
		}
		for (var R = 0; R < document.styleSheets[S][cssRules].length; R++) {
			if (document.styleSheets[S][cssRules][R].selectorText == selector) {
				alert("Selector Found! Sheet: " + S + "    Rule: " + R + "    Selector: "+ document.styleSheets[S][cssRules][R].selectorText);
				if(document.styleSheets[S][cssRules][R].style[rule]){
					document.styleSheets[S][cssRules][R].style[rule] = value;
					alert(document.styleSheets[S][cssRules][R].cssText);
					break;
				}
			}
		}
	}
}
	

alert("script run...");
})();

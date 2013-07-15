(function(){

//var theClass = '.cq-editrollover-highlight-left';
var theClass = 'hopschotch';

var element = 'display';
var value = 'none !important';
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
			alert("Selector Found!");
			if(document.styleSheets[S][cssRules][R].style[element]){
				document.styleSheets[S][cssRules][R].style[element] = value;
				alert("Did it!");
				break;
			}
		}
	}
}

	

alert("script run...");
})();

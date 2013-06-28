(function(){
//	for(var i=0; i < document.styleSheets.length; i++)
//	{
//		var currentSheet=document.styleSheets[i];
//		var pageRules=currentSheet.cssRules? currentSheet.cssRules: currentSheet.rules //Makes this browser independent
//		for (var j=0; j<pageRules.length; j++){
//			if(pageRules[j].selectorText.toLowerCase()=='#cq .cq-editrollover-highlight-left')
//			{//Rule located
//				alert("Target found");
//				pageRules[j].style.zIndex = '0 !important';
//				alert(pageRules[j].style.zIndex);
//				alert(pageRules[j].cssText);
//			}
//		}
//	}
var v = "1.3.2";
// check prior inclusion and version
if (window.jQuery === undefined || window.jQuery.fn.jquery < v) { // If the current page either doesn't have jQuery or is out of date
var done = false;
var script = document.createElement("script");
script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
script.onload = script.onreadystatechange = function(){
if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
done = true;
$('.cq-editrollover-highlight-left').css('display', 'none !important');
}
};
document.getElementsByTagName("head")[0].appendChild(script);
}
else{
$('.cq-editrollover-highlight-left').css('display', 'none !important');
}


})();

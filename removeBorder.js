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


$('.cq-editrollover-highlight-left').css('display', 'none !important');
})();

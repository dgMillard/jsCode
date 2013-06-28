(function(){
//	var newCss = '#CQ .cq-editrollover-highlight-left { display: none !important;}';
//	var appendee = document.createElement('style');
//	appendee.type = 'text/css';
//	if (appendee.styleSheet) {//Internet Exploder
//		appendee.styleSheet.cssText = newCss;
//	} else {//Alternate Browsers		
//		appendee.innerHTML = newCss;
//	}
//
//	document.getElementsByTagName("head")[0].appendChild(appendee);
//	console.log(appendee.innerHTML);

	for(var i=0; i < document.styleSheets.length; i++)
	{
		var currentSheet=document.styleSheets[i];
		var pageRules=currentSheet.cssRules? currentSheet.cssRules: currentSheet.rules //Makes this browser independent
		for (var j=0; j<pageRules.length; j++){
			if(pageRules[j].selectorText.toLowerCase()=="#cq .cq-editrollover-highlight-left")
			{//Rule located
				alert("Target found");
				pageRules[j].style.zIndex = "0 !important";
				break;
			}
		}
	}

})();

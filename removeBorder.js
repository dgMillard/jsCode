(function(){
	var newCss = '.cq-editrollover-highlight-left { z-index: 0 !important;}';
	var appendee = document.createElement('style');
	appendee.type = 'text/css';
	if (appendee.styleSheet) {//Internet Exploder
		appendee.styleSheet.cssText = newCss;
	} else {//Alternate Browsers		
		appendee.innerHTML = newCss;
	}

	document.getElementsByTagName("head")[0].appendChild(appendee);
	console.log(appendee);
})();

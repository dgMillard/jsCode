(function(){
	//var cssElement = document.getElementById("CQ");
	//alert(cssElement.id);
	//cssElement.style.cqEditrolloverInsertContainerDisplay = 'none';
	//cssElement.style.display = 'none';
	//alert(cssElement.style.cqEditrolloverHighlightBackgroundColor);
	//alert(csselement.style(['cq-editrollover-insert-container-display']));
	
	var classes = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
  	for(var x=0;x<classes.length;x++) {
  		alert(classes[x].cssText);
  	}
  	alert(classes.length);
})();

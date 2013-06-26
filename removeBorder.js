(function(){
	//var cssElement = document.getElementById("CQ");
	//alert(cssElement.id);
	//cssElement.style.cqEditrolloverInsertContainerDisplay = 'none';
	//cssElement.style.display = 'none';
	//alert(cssElement.style.cqEditrolloverHighlightBackgroundColor);
	//alert(csselement.style(['cq-editrollover-insert-container-display']));
	var classes = new Array();
	var useCssRules = true;
	//if(document.styleSheets[i].rules)
		//useCssRules = false;
	
	for(var i=0; i < document.styleSheets.length; i++)
	{
		if(useCssRules)
		{
			for(var j=0; j < document.styleSheets[i].cssRules.length; j++)
			{
				classes.push(document.styleSheets[i].cssRules[j]);
			}
		}
		else
		{
			for(var j=0; j < document.styleSheets[i].rules.length; j++)
			{
				classes.push(document.styleSheets[i].rules[j]);
			}
		}
	}
  	for(var x=0;x<classes.length;x++) {
  		//alert(classes[x].cssText);
  	}
  	alert(classes.length);
})();

(function(){
// the minimum version of jQuery we want
var v = "1.3.2";
// check prior inclusion and version
if (window.jQuery === undefined || window.jQuery.fn.jquery < v) { // If the current page either doesn't have jQuery or is out of date
	var done = false;
	var script = document.createElement("script");
	script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
	script.onload = script.onreadystatechange = function(){
		if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
			done = true;
			componentScannerLink("https://raw.github.com/dgMillard/jsCode/master/Grid%20Scanner/componentScanner.js");
		
		}
	};
	document.getElementsByTagName("head")[0].appendChild(script);
	}
	else{
		componentScannerLink("https://raw.github.com/dgMillard/jsCode/master/Grid%20Scanner/componentScanner.js");
	}
function jsonp(url) { //Pull in the JSON after validator loads
	var done = false;
	var head = document.head;
	var script = document.createElement("script");
	script.setAttribute("src", url);
 	script.onload = script.onreadystatechange = function(){
		if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
			done = true;
		}
	};
	document.body.appendChild(script); // Run the json file. Links callback to componentValidator.run().
}
function componentScannerLink(url) { //Pull in the validator after jQuery loads
	var done = false;
	var head = document.head;
	var script = document.createElement("script");
	script.setAttribute("src", url);
 	script.onload = script.onreadystatechange = function(){
		if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
			done = true;
		}
	};
	document.body.appendChild(script); // Add the new windowComponent. Calls jsonp
}
window.componentValidator = {
	run:function(jsonData){
		window.componentValidator.rules = jsonData;
		var time = new Date();
		for(var i = 0; i<window.componentValidator.rules.ruleSet.length; i++)
		{
			alert(i + " " +window.componentValidator.rules.ruleSet[i].behavior);
		}
		window.componentValidator.results = new Array("Grid Scanner output for scan at " + time.toTimeString() + ".<br>");
		var gridFound = false;
		$(".gdb").each(function(index){//Find jQuery instance of each grid
			var indent = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp";
			var rules = window.componentValidator.rules;
			gridFound = true;
			var parent = new Object();
			parent.className = this.parentNode.className;
			parent.idName = this.parentNode.id;
			window.componentValidator.results.push("<br>Grid: " + $(this).attr('class') + "<br>Parent class: " + parent.className+ "<br>Parent id: " + parent.idName+ "<br><br>");// Report on grid glasses and parent
			var children = this.children;
			var isBlob = false;
			for(var c = 0;c<this.childElementCount;c++)//Iterate through each child
			{
				//Ensure we only check regions...
				if(children[c].className == "gd-left" || children[c].className == "gd-mid" || children[c].className == "gd-right")
				{
					window.componentValidator.results.push("For region: " + children[c].className + "<br>");
					var grandChildren = children[c].children;
					//window.componentValidator.results.push("Warn: " + children[c].className + " contains multiple elements.<br>");
					for( var g=0; g < children[c].childElementCount;g++)
					{
						//results.push(indent + "Class: " + grandChildren[i].className + indent);
						//if(!grandChildren[i].id == "")
						//	window.componentValidator.results.push("ID: " + grandChildren[i].id+" <br>");
						//else
						//	window.componentValidator.results.push("<br>");
						// Check for grid contents
						var containsGrid = false;
						for(var i=0; i<children[c].childElementCount; i++)
						{
							if($(grandChildren[g]).hasClass('gdb'))
								containsGrid = true;
						}
						if(containsGrid) //A child grid
						{
							window.componentValidator.results.push("Warn: " + children[c].className + "contains another grid.<br>");
						}
						// Now check if its a properly classed component
						else if($(grandChildren[g]).hasClass("mlb-pilot") || $(grandChildren[g]).hasClass("clb"))
						{
							if(!window.componentValidator.validate(grandChildren[g], window.componentValidator.rules, window.componentValidator.results))
							{
								isBlob = true;
							}	
						}
						else
						{
							window.componentValidator.results.push("Fatal: Unaccounted child (" + grandChildren[g].className + ") located in: " + children[c].className+"<br>");
							isBlob = true;
						}
					}// End grandChild iterator
				}// End region classname if
			}// end region iterator
			if(isBlob)
				window.componentValidator.results.push("Grid is a blob.<br>");
			else
				window.componentValidator.results.push("Grid Evaluated Successfully<br>");
			window.componentValidator.results.push("<br>__<br><br>");
		}); // End grid forEach
		if(!gridFound)
			window.componentValidator.results.push("No grids found on page.<br>");

		window.componentValidator.results.push("<br>_____________<br><br>");

		this.display();
	},
	display:function(){
		for(var i =0; i<window.componentValidator.results.length; i++)
		{
			$("body").append(window.componentValidator.results[i]);
		}
	},
	jsonp:function(url){
		var done = false;
		var head = document.head;
		var script = document.createElement("script");
		script.setAttribute("src", url);
	 	script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
			}
		};
		document.body.appendChild(script); // Run the json file. Links callback to componentValidator.run().
	}
}; //End object definition
})(); // End global anonymous function

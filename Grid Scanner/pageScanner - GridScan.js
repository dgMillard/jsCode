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
			componentScannerLink();
		
		}
	};
	document.getElementsByTagName("head")[0].appendChild(script);
	}
	else{
		componentScannerLink();
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
	document.body.appendChild(script); // Add the new windowComponent
	jsonp("https://raw.github.com/dgMillard/jsCode/master/Grid Scanner/jsonRules.js"); // Add the json, calls componentValidator.run
}
window.componentValidator = {
	run:function(jsonData){
		this.rules = jsonData;
		var time = new Date();
		window.componentValidator.results = new Array("Grid Scanner output for scan at " + time.toTimeString() + ".<br>");
		var gridFound = false;
		$('*').each(function(index) // This resets the scanned property to enable the script to run multiple times
		{this.scanned = false;});
		$(".gdb").each(function(index){//Find jQuery instance of each grid
			var indent = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp";
			var rules = componentValidator.rules
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
						for(var g=0; g<children[c].childElementCount; i++)
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
							//Validate here
						}
						else
						{
							window.componentValidator.results.push("Fatal: Unaccounted child (" + grandChildren.className + ") located in: " + children[c].className);
							isBlob = true;
						}
					}


					else if(children[c].childElementCount > 1)//Multiple children
					{
						var grandChildren = children[c].children;
						window.componentValidator.results.push("Fatal: " + children[c].className + " contains multiple elements.<br>");
						for( var i=0; i < children[c].childElementCount;i++)
						{
							results.push(indent + "Class: " + grandChildren[i].className + indent);
							if(!grandChildren[i].id == "")
								window.componentValidator.results.push("ID: " + grandChildren[i].id+" <br>");
							else
								window.componentValidator.results.push("<br>");
						}
						isBlob = true;	
					}
					else //Rule Parse
					{
						window.componentValidator.validate();
					}
				}
			}
					

		}); // End grid forEach
		if(!gridFound)
			results.push("No grids found on page.<br>");

		results.push("<br>_____________<br><br>")

		this.display(results);
	},
	display:function(results){
		for(var i =0; i<results.length; i++)
		{
			$("body").append(results[i]);
		}
	}
}; //End object definition
})(); // End global anonymous function

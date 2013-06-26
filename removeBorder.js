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
			cleanBorders();		
		}
	};
document.getElementsByTagName("head")[0].appendChild(script);
}
else{
	cleanBorders();
}


function cleanBorders() {
//	jQuery("[id=CQ]").cq-editrollover-insert-container.display= 'none';
	CQ.editrollover-insert-container("display: none");
}

})();

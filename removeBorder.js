(function(){


	var headTag = document.getElementsByTagName("head")[0].innerHTML;	
	var newCSS = headTag + '<style type="text/css">#CQ .cq-editrollover-highlight-right {display: none;}</style>';
	document.getElementsByTagName('head')[0].innerHTML = newCSS;
 
})();

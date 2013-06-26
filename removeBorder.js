(function(){


	var headTag = document.getElementsByTagName("head")[0].innerHTML;	
	var newCSS = headTag + '<style type="text/css">#CQ .cq-editrollover-insert-container {display: none;}</style>';
	document.getElementsByTagName('head')[0].innerHTML = newCSS;
 
})();

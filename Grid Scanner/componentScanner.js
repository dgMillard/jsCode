window.componentValidator.validate = function(component, jsonrules, results){
	var rules = jsonrules;
	var indent = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp";
	var matchFound = new Array(this.rules.ruleSet.length);// Create an array to track if each rule is run
	for(var r=0;r<rules.ruleSet.length;r++) // Iterate through each rule...
	{
		//alert("Does " + component.className + " contain " + rules.ruleSet[r].target+"?");
		//alert(rules.ruleSet[r].target);
		matchFound[r] = false; // Var to confirm this rule was ever run
		//if($(component).hasClass(rules.ruleSet[r].target)) //If the rule lines up
		if($(component).is(rules.ruleSet[r].target)) //If the rule lines up
		{
			var $tempDiv = $(component); // Create a temp div so we aren't changing the actual page
			$tempDiv.find('*').each(function(index) // This resets the scanned property to enable the script to run multiple times
			{this.scanned = false;}); // Adds and falsifies a bool to each element				
			matchFound[r] = true; // Tells the log we actually ran this rule
			var boolCriteria = new Array(rules.ruleSet[r].criteriaList.length); // Simplifies json query and allows us to alter elements 
			for(var i=0;i<rules.ruleSet[r].criteriaList.length; i++)
			{ // Might be unneccesary, need to check if you can set equate arrays
				boolCriteria[i] = false;
			}
			for (var  i=0;i<rules.ruleSet[r].criteriaList.length;i++)// Time to eval each criteria
			{
				if (typeof rules.ruleSet[r].criteriaList[i] === 'function') // First, check if its a function
				{
					boolCriteria[i] = rules.ruleSet[r].criteriaList[i](component); // If it is, pass the function the DOM object 'target' and set our completion tracker to the returned value 
				}
				else if (typeof rules.ruleSet[r].criteriaList[i] == 'string' || rules.ruleSet[r].criteriaList[i] instanceof String) // If it isn't a function, it should be a selector string
				{
					//$(rules.ruleSet[r].criteriaList[i],$tempDiv).each(function(index) // Filter out the DOM objects that match our selector
					$tempDiv.find(rules.ruleSet[r].criteriaList[i]).each(function(index)
					{
						if(this.scanned != true && boolCriteria[i] != true) // Confirm we have not already eval'd the element, and comfirm we are not running 1 criteria on multiple elements
						{
							boolCriteria[i] = true; // An instance was found, good!
							this.scanned = true; // Property to tell script the element was eval'd
						}
					}); // End function
				}// End string check if statement
			}//End criteria iteration
			var complete = true; //Set our completion variable. If it stays true, it met all criteria
			if(rules.ruleSet[r].behavior == 'strict') // If our rule has the 'strict' behavior...
			{
				$tempDiv.find('*').each(function(index)
				{//Check all the elements in the target
					if(this.scanned != true) //If one has not been successfully evaluated...
					{
						complete = false; // Fail the rule for this target.
						results.push("<font color=\"red\">Excess element was found in " + rules.ruleSet[r].target + ".<br></font>"); // Log the failure.
						results.push(indent + "Node Name: " + this.nodeName + "<br>");
						results.push(indent + "Class Name: " + this.className + "<br>");
						results.push(indent + "ID: " + this.id + "<br>");
					}
				}); // End strict for loop
			}// End strict behavior check
			for(var i=0;i<boolCriteria.length; i++) // Check if the class had all elements properly evaluated
			{
				if(boolCriteria[i] == false) // If the criteria is false
				{
					complete = false; // Fail the rule...
					results.push("<font color=\"red\">Field " +rules.ruleSet[r].criteriaList[i] + " was not found in " + rules.ruleSet[r].target + ".<br></font>"); // Log the missing element
				}
			}// End criteria completion for loop
			if(complete == true) // If completion is still true, then it is valid
			{				
				//this.style.border = "3px solid green"; // Create a green border around the div/element
				results.push("Success: <font color=\"green\">" + rules.ruleSet[r].title + " validated successfully.<br><br></font>"); // Log the success!
				return true;
			}
			else
			{
				//this.style.border = "3px solid red"; // Create a red border around the div/element
				results.push("Fatal: <font color=\"red\">" + rules.ruleSet[r].title + " failed to validate.<br><br></font>"); // Log the failed rule.
				return false;
			}
		} // End the for each target function
	}// End ruleset iteration
	results.push("Fatal: <font color=\"red\">" + component.className + " did not match a rule for the page.<br><br></font>"); // Log the success!

	return false; // If you got to here, the component wasn't a rule
};
window.componentValidator.jsonp("https://raw.github.com/dgMillard/jsCode/master/Grid Scanner/jsonRules.js"); // Add the json, calls componentValidator.run

componentValidator.run(
{
   "ruleSet":[
      {
         "behavior" : "loose",
         "title":"Rule for .c50-pilot",
         "target":".c50-pilot",
         "criteriaList":[
               ".frame",
               ".c50-text",
               "#thumbnails",
               function(target){
                  target = jQuery(target);
                  return true;
               }
         ]
      },
      {
         "behavior" : "loose",
         "title":"Rule for .c46-pilot",
         "target":".c46-pilot",
         "criteriaList":[
              "h3",
               "p", 
              ".cta-links"
         ]
      },
      {
         "behavior" : "strict",
         "title":"Rule for .c00-pilot",
         "target":".c00-pilot",
         "criteriaList":[
               "h1",
               "p"
         ]
      },
      {
         "behavior" : "strict",
         "title":"Rule for .c11-pilot",
         "target":".c11-pilot ",
         "criteriaList":[
               "h2",
               "p"
         ]
      },
      {
         "behavior" : "strict",
         "title":"Test rule",
         "target":".test",
         "criteriaList":[
               "h1",
               "h1",
               "p"
         ]
      }
   ]
}
);

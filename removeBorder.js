(function(){

if(document.URL.search("cf#") == -1)
{
  var formHTML = '<p><p>CQ CleanOTron 1500</p><table> <tr> <td><button onclick="window.componentClear(0)">Run</button> </td> <td>Clear Mouseover Borders</td> </tr> <tr> <td><button onclick="window.componentClear(1)">Run</button> </td> <td>Clear Drop Targets</td> </tr> <tr> <td><button onclick="window.componentClear(2)">Run</button> </td> <td>Re-add Component View</td> </tr></table>';
  jQuery('body').append(formHTML);
  
  
  window.componentClear = function(section) {
    switch(section)
    {
    case 0: //Remove Hightlight Borders
      jQuery('.cq-editrollover-highlight-left').remove();
      jQuery('.cq-editrollover-highlight-right').remove();
      jQuery('.cq-editrollover-highlight-top').remove();
      jQuery('.cq-editrollover-highlight-bottom').remove();
      break;
    case 1: //Remove Drop Targets
      jQuery('.cq-editrollover-insert-container').remove();
      break;
    case 2: //Re-add cf#
      if(document.URL.substring(0, 22) == "http://localhost:4502/")
      {
        window.open(document.URL.substring(0, 22) + "cf#" + document.URL.substring(21));

      }
      break;
    }
  };
}
else
{
  var newLoc = document.URL.replace(/cf#\//,"");
  window.open(newLoc,"_self");
}





})();

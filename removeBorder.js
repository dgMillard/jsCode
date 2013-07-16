(function(){

jQuery('body').prepend('<p>CQ CleanOTron 1500</p><table> <tr> <td><button onclick="window.componentClear(1)">Run</button> </td> <td>Clear Left Borders</td> </tr> <tr> <td><button onclick="window.componentClear(2)">Run</button> </td> <td>Clear Right Borders</td> </tr> <tr> <td><button onclick="window.componentClear(3)">Run</button> </td> <td>Clear Top Borders</td> </tr> <tr> <td><button onclick="window.componentClear(4)">Run</button> </td> <td>Clear Bottom Borders</td> </tr></table>');


window.componentClear = var functionOne = function(section) {
  switch(n)
  {
  case 1:
    jQuery('.cq-editrollover-highlight-left').remove();
    break;
  case 2:
    jQuery('.cq-editrollover-highlight-right').remove();
    break;
  case 3:
    jQuery('.cq-editrollover-highlight-top').remove();
    break;
  case 4:
    jQuery('.cq-editrollover-highlight-bottom').remove();
    break;
  }
};







})();

(function(){

if(document.URL.search("cf#") != -1)
{
  alert("Yarrr2");
  var formHTML = '<p>CQ CleanOTron 1500</p><table> <tr> <td><button onclick="window.componentClear(0)">Run</button> </td> <td>Clear Mouseover Borders</td> </tr> <tr> <td><button onclick="window.componentClear(1)">Run</button> </td> <td>Clear Drop Targets</td> </tr></table>';
  jQuery('body').append(formHTML);
  
  
  window.componentClear = function(section) {
    switch(section)
    {
    case 0:
      jQuery('.cq-editrollover-highlight-left').remove();
      jQuery('.cq-editrollover-highlight-right').remove();
      jQuery('.cq-editrollover-highlight-top').remove();
      jQuery('.cq-editrollover-highlight-bottom').remove();
      break;
    case 1:
      jQuery('.cq-editrollover-insert-container').remove();
      break;
  
    }
  };
}
else
{
  alert("Yarrr");
  location.href = "http://youtube.com";
}





})();

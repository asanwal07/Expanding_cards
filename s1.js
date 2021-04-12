const panels=document.querySelectorAll(".panel")
// var i;
// for (i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }
var i;
panels.forEach(myfunction);

function myfunction(panel)
{
      panel.addEventListener("click",function()
      {
            removeActiveclasses();
            panel.classList.add("active")
      })
}
function removeActiveclasses()
{
      panels.forEach(panel =>
            {
                  panel.classList.remove("active")
            })
}
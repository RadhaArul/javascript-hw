$(document).ready(function(){
    let color="";
//Dynamically creating new list
$("#btnnew").click(function(){
    let newList="<div class=\"container\">"+ 
     "<div class=\"div1\">"+
     "<input class=\"inputitem\" type=\"text\" placeholder=\"Enter the Item\" name=\"item\" /> "+
     "<button class=\"btnadd\">ADD</button>"+
     " </div>"+
     "<div class=\"div2\"> <ul class=\"ulist\"></ul></div>"+
     "</div>";
    
    $(".mainContainer").append(newList);
});

//Dynamically picking color for the list
$(".box").click(function(){

    color=$(this).attr("class").split(" ")[0];
   
});

//Dynamically setting color to the list
$(this).on("click",".container",function(){
    if(color=="green")
    {
$(this).css( "background-color" ,"rgb(131, 241, 179)");
color="";
}
else if(color=="blue")
{
$(this).css( "background-color" ,"rgb(137, 137, 247)");
color="";
}
else if(color=="pink")
{
$(this).css( "background-color" ,"rgb(216, 112, 147)");
color="";
}
else if(color=="yellow")
{
$(this).css( "background-color" ,"rgb(235, 235, 160)");
color="";
}

// Drag to new place
$(this).draggable();
});

});
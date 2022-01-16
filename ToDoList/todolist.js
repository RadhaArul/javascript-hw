$(document).ready(function(){

//Adding item to the list

$(this).on("click",".btnadd",function(){
    let NIvalue=$(this).prev().val();
    if(NIvalue!='')
    {
    let newitem=("<li><span class=\"delete\">"+
    "<img src=\"image/rbin.jfif\"  /></span>"+
    "<input class=\"ckbox\" type=\"checkbox\" /> "+
    "<label> "+ NIvalue +"</label></li>");
    $(this).parent().append(newitem);
}
});

// Deleting item from the list.
$(this).on("click",".delete",function(){
$(this).parent().remove();
});


//Mark and Unmark item from the list
$(this).on("click",".ckbox",function(){
    
    if($(this).is(":checked")){
        $(this).next().css({ "background-color":"rgb(255,69,0)" , "text-decoration" : "line-through"});
    }else if($(this).is(":not(:checked)")){
        $(this).next().css({ "background-color":"transparent" , "text-decoration" : "none"});  
    }
});




});
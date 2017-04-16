$(function(){



    initProduct();
})
function initProduct(){
    //alert(1)
    var $tabsProduct=$(".nav-tabs-product");
    var $list=$tabsProduct.find("li");
    var width=0;
    $list.each(function(index,dom){
        //console.log($(dom).width());
        width+=$(dom).width();
        //console.log(width);
    })
   var width=$(window).width();
    if(width<768){
        $tabsProduct.css({"width":width+"px"})
    }
}
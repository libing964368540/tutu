$(function(){
var arr=[
        {src:"images/1-9.jpg"},
        {src:"images/1-10.jpg"},
        {src:"images/1-11.jpg"},
        {src:"images/1-12.jpg"},
        {src:"images/1-13.jpg"},
        {src:"images/1-14.jpg"},
        {src:"images/1-15.jpg"},
        {src:"images/1-16.jpg"}
        
    ]

$(".one").on("click",function(){

    	$("li img").attr("src",function(i,oldsrc){

    		return arr[i].src;
    		    	})
           })
 $(".box ul li").on("click",function(e){
    	console.log($(".cart"))
    	e.preventDefault();
    	$(".cart").addClass("tutu");
    	$(".cart img").attr("src",$(this).find("img").attr("src"))
        $(".cart").attr("data-id",$(this).index());
          })
var imgs=$(".box img")
      $(".cart").on("mousedown",function(e){
          e.preventDefault();
      })
    $(".cart").on("click",function(e){
        
    	var index=parseInt($(this).attr("data-id"));
    	
        if(e.clientX>$(this).outerWidth(true)/2){
            index+=1;
        }else{
            index-=1;
        }
        if(index===imgs.length){
             $(".cart .tankuang1").addClass("fankuang1")
            var t=setTimeout(function(){
            $(".cart .tankuang1").removeClass("fankuang1")
            },1000)
           
            return
        }
      
        if(index===-1){
            $(".cart .tankuang2").addClass("fankuang2")
           var h=setTimeout(function(){
             $(".cart .tankuang2").removeClass("fankuang2")
            },1000)
          
            return;
        }
        $(".cart").attr("data-id",index);
        $(".cart img").attr("src",imgs.eq(index).attr("src"))
        })
       $(".cart .close").on("click",function(e){
         e.stopPropagation();
        $(".cart").removeClass("tutu")
       
    })














	
})
$(function(){
    //头部下拉菜单
    var $btn=$(".btn");
    var $max_nav=$(".max-nav");
    var $header=$(".header");
    var $shop2=$(".shop2");
    $btn.click(function(){
        //$btn.css("background","none").html("X").css({color:"#fff"});
        //$shop2.css("display","none");
        $max_nav.slideToggle(500).css({position:"relative",zIndex:999});
        $header.css("background-color","#000");
    });
    //底部下拉菜单
    var $btn2=$(".foot1 span");
    var $list=$(".list");
    $btn2.click(function(){
        if(document.documentElement.clientWidth<768) {
            $(this).next($list).eq($(this).index()).slideToggle(500);
        }
    });
    //轮播图
    var $imgs=$(".dabanner a");
    var $oneW=$imgs.width();
    var now=0;
    var next=0;
    setInterval(function(){
        next++;
        if(next==$imgs.length){
            next=0;
        }

    },3000)


});
$(function(){
    //头部下拉菜单
    var $btn=$(".btn");
    var $max_nav=$(".max-nav");
    var $header=$(".header");
    var $shop2=$(".shop2");
    var $cha=$(".btn+a");
    $btn.click(function(){
        $btn.css("display","none");
        $cha.css("display","block");
        $max_nav.slideDown(500).css({position:"relative",zIndex:999});
        $header.css("background-color","#000");
    });
    $cha.click(function(){
        $cha.css("display","none");
        $btn.css("display","block");
        $max_nav.slideUp(500).css({position:"relative",zIndex:999});
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
    var $btns=$(".btns li");
    var $lbtn=$(".lbtn");
    var $rbtn=$(".rbtn");
    $imgs.css({left:"100%"}).eq(0).css({left:0});
    var flag=true;
    function move(){
        if(!flag){
            return;
        }
        flag=false;
        next++;
        if(next==$imgs.length) {
            next=0;
        }
        $imgs.eq(next).css({left:"100%"},500);
        $imgs.eq(now).animate({left:"-100%"},500);
        $imgs.eq(next).animate({left:0},500,function(){
            flag=true;
        });
        $btns.eq(now).removeClass("active");
        $btns.eq(next).addClass("active");
        now=next;
    }
    var t=setInterval(move,1500);
    var $Box=$(".banner");
    $Box.hover(function(ev){
        ev.preventDefault();
        clearInterval(t);
    },function(){
        t=setInterval(move,1500);
    });
    $lbtn.click(function(ev){
        ev.preventDefault();
        if(!flag){
            return;
        }
        flag=false;
        next--;
        if(next==-1) {
            next=$imgs.length-1;
        }
        $imgs.eq(next).css({left:"-100%"},500);
        $imgs.eq(now).animate({left:"100%"},500);
        $imgs.eq(next).animate({left:0},500,function(){
            flag=true;
        });
        $btns.eq(now).removeClass("active");
        $btns.eq(next).addClass("active");
        now=next;
    });
    $rbtn.click(function(ev){
        ev.preventDefault();
        move();
    });
    $btns.click(function(ev){
        ev.preventDefault();
        if(now==$(this).index()||!flag){
            return false;
        }
        flag=false;
        if($(this).index()<now){
            $imgs.eq($(this).index()).css({left:"-100%"});
            $imgs.eq(now).animate({left:"100%"},500);
        }else{
            $imgs.eq($(this).index()).css({left:"100%"});
            $imgs.eq(now).animate({left:"-100%"},500);
        }
        $imgs.eq($(this).index()).animate({left:0},500,function(){
            flag=true;
        });
        $btns.eq(now).removeClass("active");
        $btns.eq($(this).index()).addClass("active");
        now=next=$(this).index();
    });

});
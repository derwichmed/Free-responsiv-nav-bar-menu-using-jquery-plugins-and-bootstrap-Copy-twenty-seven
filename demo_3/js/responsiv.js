$(function (){
    $('header .nav_bar .nav_bar_item > div').click(function (){
        $('header .nav_bar .nav_bar_item > div').removeClass('nav_bar_item_click');
        $('header .nav_bar .nav_bar_item > div > .sub_menu_border:visible').hide();
        $('header .nav_bar .nav_bar_item > div > .sub_menu:visible').hide();
        $(this).addClass('nav_bar_item_click');
        $(this).find('> .sub_menu_border').show();
        $(this).find('> .sub_menu').show();
    });
    
    $('header .nav_bar .nav_bar_item .sub_menu .sub_menu_item > div').mouseover(function (){
        $('header .nav_bar .nav_bar_item .sub_menu .sub_menu_item > div > .sub_menu:visible').hide();
       $(this).find('> .sub_menu').show();
    });
    
    
     isNavBarHidden = true;
    $('#menu_icon').click(function (){
         if(isNavBarHidden){
             $('header .nav_bar').fadeIn("slow");
             isNavBarHidden = false;
         }
         else{
             $('header .nav_bar').fadeOut("slow");
             isNavBarHidden = true;
         }
    });
});
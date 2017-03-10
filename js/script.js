$(document).ready(function(){
    var winWidth = $(window).width();
    console.log(winWidth);
    /**
     * animate mobile nav
     */
    var menuButton = $('.mobile-menu-button');
    var mobileNav =  $('#mobile-nav');

    menuButton.click(function(){

        if ( mobileNav .hasClass('active') ) {

            mobileNav.removeClass('displayBlock');
            mobileNav.addClass('displayNone');
            mobileNav.removeClass('active');
            menuButton.children('.color-bar1').removeClass('bar1');
            menuButton.children('.color-bar2').removeClass('bar2');
            menuButton.children('.color-bar3').removeClass('bar3');

        } else {

            mobileNav.removeClass('displayNone');
            mobileNav.addClass('displayBlock');
            mobileNav.addClass('active');
            menuButton.children('.color-bar1').addClass('bar1');
            menuButton.children('.color-bar2').addClass('bar2');
            menuButton.children('.color-bar3').addClass('bar3');

        }
    });

    /**
     * carousel width is 100% so dynamic so set height based on width
     */
    var carouselWidth = $('.carousel-inner').width();
    var calcHeight = carouselWidth / 2.7;

    $('.carousel-inner').css('height', calcHeight);

    /**
     * spin servies link icon on hover and restore on mouseout
     */
    $('.service').mouseover(function(){
        var over = $(this).children('.services-bubble');
        $(over).css('transform', 'rotate(45deg)');
        $(over).css('transition', 'transform 1.5s');
    });

    $('.service').mouseout(function(){
        var over = $(this).children('.services-bubble');
        $(over).css('transform', 'rotate(0deg)');
        $(over).css('transition', 'transform 1.5s');
    });

    // carousel slide interval
    $('.carousel').carousel({
      interval: 2000
    });

    // set height for footer to allow full div  background image
    var footHeight = $('#foot').height() + 40; //add extra for padding
    $('footer').css('min-height', footHeight );


    /**
     * prepare a few elements with different css
     */
     // bullet-list icons ( set opacity to 0 and fadeIn when scrolled into view ) 
     $('.catch-icon').css('opacity', '0');

     // move product images out of view to slide in on scroll
     $('.product1').css({'position' : 'relative', 'left':'-1000px', 'opacity' : '0'});
     $('.product2').css({'position' : 'relative', 'top':' -300px', 'opacity' : '0'});

     /**
      * show content from clicking services icons
      */
      // function to remove active classes
      function removeActive() {
          $('.services-bubble').each(function(){
              $(this).removeClass('active-bubble'); 
              $(this).parent('.service').children('.services-title').removeClass('active-title');
          });
      }
      function fabShow() {
              $('.last-about').load('/k-eng/fabrication-content.html');     
              $('#fab-show').children('.service').children('.services-bubble').addClass('active-bubble');
              $('#fab-show').children('.service').children('.services-title').addClass('active-title');
      }
      function designShow() {
              $('.last-about').load('/k-eng/design-content.html');     
              $('#design-show').children('.service').children('.services-bubble').addClass('active-bubble');
              $('#design-show').children('.service').children('.services-title').addClass('active-title');
      }
      function foldingShow() {
              $('.last-about').load('/k-eng/folding-content.html');     
              $('#folding-show').children('.service').children('.services-bubble').addClass('active-bubble');
              $('#folding-show').children('.service').children('.services-title').addClass('active-title');
      }
      function laserShow() {
              $('.last-about').load('/k-eng/laser-content.html');     
              $('#laser-show').children('.service').children('.services-bubble').addClass('active-bubble');
              $('#laser-show').children('.service').children('.services-title').addClass('active-title');
      }
      function polishingShow() {
              $('.last-about').load('/k-eng/finishing-content.html');     
              $('#polishing-show').children('.service').children('.services-bubble').addClass('active-bubble');
              $('#polishing-show').children('.service').children('.services-title').addClass('active-title');
      }
      if ( winWidth > 1000 ) {
          /** 
           *change main menu href to use single page application disbaled on mobile menu
           */ 
          $('.menu-design').attr('href', '#design');
          $('.menu-laser').attr('href', '#laser');
          $('.menu-folding').attr('href', '#folding');
          $('.menu-fabrication').attr('href', '#fabrication');
          $('.menu-finishing').attr('href', '#finishing');
          // when user clicks item on main menu page goes to id and loads content
          $('.menu-design').click(function(){
              removeActive();
              designShow();
          });
          $('.menu-laser').click(function(){
              removeActive();
              laserShow();
          });
          $('.menu-folding').click(function(){
              removeActive();
              foldingShow();
          });
          $('.menu-fabrication').click(function(){
              removeActive();
              fabShow();
          });
          $('.menu-finishing').click(function(){
              removeActive();
              polishingShow();
          });

          /**
           * lower page icons animate and ajax load content
           */
          $('#fab-show').click(function(e){
              e.preventDefault(); 
              removeActive();
              fabShow();
          });

          $('#design-show').click(function(e){
              e.preventDefault(); 
              removeActive();
              designShow();
          });

          $('#folding-show').click(function(e){
              e.preventDefault(); 
              removeActive();
              foldingShow();
           });

          $('#laser-show').click(function(e){
              e.preventDefault(); 
              removeActive();
              laserShow();
          });

          $('#polishing-show').click(function(e){
              e.preventDefault(); 
              removeActive();
              polishingShow();
          });
      }
}); 
// activate anmations on scroll down
$(window).scroll(function(){
    // get window height
    var windowHeight = $(window).height();
    // pop in bullet-list icons
    $('.bullet-list').each(function(){
        // get scoll position
        var down = ( $(window).scrollTop() + windowHeight);

        if ( down  > Math.floor( $(this).offset().top+ $(this).height() )  ) {
            // animate icons
            $(this).children('.catch-icon').animate({opacity: 1.0}, 1200 );
        }
    // slide in product1
    if ( down > Math.floor( $('.product1').offset().top + $('.product1').height() ) ) {
        $('.product1').animate({'left':'0', 'opacity' : '1'}, 1200);
    }
    // slide in product2
    if ( down > Math.floor( $('.product2').offset().top + $('.product2').height() ) ) {
        $('.product2').animate({'top':'0', 'opacity' : '1'}, 1200);
    }
    });
});
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-30
        }, 1000);
        return false;
      }
    }
  });
});

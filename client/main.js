import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
        
Router.route('/', function () {
    this.render('home');
    document.title = 'Think. Plan. Thrive.';
  
});

Router.route('/jungle', function () {
  this.render('ideaSafari');
});

Router.route('/beta', function () {
  this.render('beta');
});


Template.home.onRendered(function() { 
    initSlider();
    initQuoteSlider();
    initPackSlider();
    initGrid();

  });

Template.beta.onRendered(function() { 
    initSlider();
    initQuoteSlider();
    initPackSlider();
    initGrid();
  });

Template.ideaSafari.onRendered(function() { 
    initSlider();
    initQuoteSlider();
    initPackSlider();
    initGrid();


  });

Template.mainSlider.onRendered(function(){
  //  $("#responsive_headline").fitText();    
});


initGrid = function() {
        console.log("initgrid");

/*
      var bigGridBox4 = $("#grid-slider").find('.bigGridBox4');

      bigGridBox4.owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        margin: 10,
        //animateOut: 'slideOut',
        //animateIn: 'slideIn',       
        dots: false,
        autoplayHoverPause:true,
        autoplayTimeout:10000

  }); 
*/
      var bigGridBox3 = $("#grid-slider").find('.bigGridBox3');

      bigGridBox3.owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        margin: 10,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',       
        dots: false,
        autoplayHoverPause:true,
        autoplayTimeout:8000

  });   

      var bigGridBox2 = $("#grid-slider").find('.bigGridBox2');

      bigGridBox2.owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        margin: 10,
        //animateOut: 'slideOut',
        //animateIn: 'slideIn',       
        dots: false,
        autoplayHoverPause:true,
        autoplayTimeout:9000

  }); 

      var bigGridBox1 = $("#grid-slider").find('.bigGridBox1');

      bigGridBox1.owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        margin: 0,
        //animateOut: 'slideOut',
        //animateIn: 'slideIn',       
        dots: false,
        autoplayHoverPause:true,
        autoplayTimeout:7000

  }); 

}





   



initSlider = function() {
    var time = 7; // time in seconds

    var $progressBar,
        $bar, 
        $elem, 
        isPause, 
        tick,
        percentTime;


      var owl = $("#main-slider").find('.owl-carousel');

      owl.owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    margin: 10,
    //nav: true,
    //animateOut: 'fadeOut',
    dots: false,
    autoplayTimeout:7000,
    onInitialized: progressBar,
    onTranslated: moved,
    onDrag: pauseOnDragging

  }); 






      //Init progressBar where elem is $("#owl-demo")
      function progressBar(elem){
        $elem = elem;//build progress bar elements
        buildProgressBar();
        start();//start counting
      }
   
      //create div#progressBar and div#bar then append to $(".owl-carousel")
      function buildProgressBar(){
          $progressBar = $("<div>",{
              id:"progressBar"
          });
          $bar = $("<div>",{
              id:"bar"
          });
          $progressBar.prepend($bar).prependTo($("#main-slider"));
      }
   
      function start() {
        //reset timer
        percentTime = 0;
        isPause = false;
        //run interval every 0.01 second
        tick = Meteor.setInterval(interval, 10);
      };
   
function interval() {
    if(isPause === false){
        percentTime += 1 / time;
        
        $bar.css({
            width: percentTime+"%"
        });
        
        // if percentTime is equal or greater than 100
        if(percentTime >= 100){
            // slide to next item 
            $("#main-slider").trigger("next.owl.carousel");
            percentTime = 0; // give the carousel at least the animation time ;)
        }
    }
}
   
      //pause while dragging 
      function pauseOnDragging(){
        isPause = true;
      }
   
      //moved callback
      function moved(){
        //clear interval
        clearTimeout(tick);
        //start again
        start();
      }

}

initQuoteSlider = function() {
    var time = 7; // time in seconds

    var owl = $("#quote-slider").find('.owl-carousel');

      owl.owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        margin: 10,
        //nav: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        dragging: false,
        dots: false,
        autoplayTimeout:7000
  }); 
}

initPackSlider = function() {
    var time = 7; // time in seconds

    var $progressBar,
        $bar, 
        $elem, 
        isPause, 
        tick,
        percentTime;


      var owl = $("#pack-slider").find('.owl-carousel-pack');

      owl.owlCarousel({
    loop:true,
    autoplay:true,
    //nav: true,
    animateIn: 'fadeIn',

    dots: false,
    autoplayTimeout:7000,
    margin:20,
    stagePadding:10,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }


  }); 

}
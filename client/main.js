import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.onRendered(function(){
    this.$('.mailmodalbutton').leanModal();
    this.$('.cvmodalbutton').leanModal();
    this.$('.aboutmodalbutton').leanModal();     
    this.$('.collapsible').collapsible({accordion : false });
   
})

        


Template.body.events({
  'click .mailmodalbutton': function (event) {
    event.preventDefault();

    $('.mailmodalbutton').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 100, // Transition in duration
      out_duration: 100, // Transition out duration
      
    });
  },

  'click .cvmodalbutton': function (event) {
    event.preventDefault();

    $('.cvmodalbutton').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 100, // Transition in duration
      out_duration: 100, // Transition out duration
      
    });
  },

  'click .aboutmodalbutton': function (event) {
    event.preventDefault();

    $('.aboutmodalbutton').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 100, // Transition in duration
      out_duration: 100, // Transition out duration
      
    });
  },

  'submit mailform': function(){
    var firstName = target.firstname.value;
    var lastName = target.lastname.value;
    var message = new String("FROM: " + firstName + " " + lastName + "MESSAGE: " + event.target.message );
    var email = target.email.value;
    $('.mailmodalbutton').closeModal();
    Meteor.call('sendEmail',email,message);
	},

  'submit cvform': function(){
    var message = "Simple CV request";
    var email = target.email.value;
    $('.mailmodalbutton').closeModal();
    Meteor.call('sendEmail',email,message);
  }

});


Template.body.onRendered(function() { 
    initSlider();
    initQuoteSlider();
    initPackSlider();
    
  });


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
        console.log("initSlider");


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

    var $progressBar,
        $bar, 
        $elem, 
        isPause, 
        tick,
        percentTime;


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
        console.log("initQuoteSlider");


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
        console.log("initQuoteSlider");


}
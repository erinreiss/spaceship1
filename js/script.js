// Remove all background colors
// $('*').css('background', 'transparent');

//Refresh on window resize - seems to only work the first time...
// $(window).resize(function() {
//     if(this.resizeTO) clearTimeout(this.resizeTO);
//     this.resizeTO = setTimeout(function() {
//         $(this).trigger('resizeEnd');
//     }, 500);
// });

// $(window).bind('resizeEnd', function() {
//   console.log("Window was resized");
//   location.reload();
// });

// $(document).ready(function(){
//     $(this).scrollTop(0);
// });


// Give my babies a white background
$('.babies').css('background', '');

// //GETTING A BASTARD TO COUNT UP ON SCROLL DOWN
//   $(document).scroll(function(){
//     console.log('window.scrollY: '+ window.scrollY)
//     console.log("position relative to window: " + (window.scrollY - activateI2start));
//       var scrollPercent3 = (window.scrollY - activateI2start) / 300;
//         console.log(scrollPercent3);
//       $('#intro1b').css('opacity', scrollPercent3);
//   });

// Set up some variables. Do I need this? What is matchdata??
var headshot = $(".headshot");
var headshotStatusQuo = $(".headshotStatusQuo");
var matchData;
var intro1_Top = $('#intro1').offset().top;
var intro2_Top = $('#intro2').offset().top;  
var intro2_Top_2 = $('#wrapperIntro2a').offset().top;  
var intro8_Top = $('#wrapperIntro8').offset().top;  


//Delayed fading landing with scroll
var intro1Activate = $('#intro1').waypoint(function (direction) {
  //GETTING A BASTARD TO COUNT DOWN ON SCROLL DOWN
  $(document).scroll(function(e){
      // console.log("position relative to window: " + (intro1_Top - window.scrollY));
    var scrollPercent1 = (intro1_Top - window.scrollY) / 350;
      if(scrollPercent1 >= 0){
          $('#intro0').css('opacity', scrollPercent1);
      }
  });
}, {offset: 350});

//Autoscroll to #intro1 THIS WORKS
// var interactionsTitle = $('#intro1').waypoint(function (direction) {
//   // console.log('ba-boom!');
//   if(direction == 'down'){
//     $('html, body').animate({
//         scrollTop: $("#intro1").offset().top
//     }, 2000);
//   }
// }, {offset: 200});

//Sticky for #intro1 
var sticky_1 = new Waypoint.Sticky({
  element: $('#wrapperIntro1')[0]
})

// Fade in/out intro1b photos
$('#defineHeightIntro1').waypoint(function(direction) {
  if(direction == 'down'){
    $('#statusQuoPhotos').animate({"opacity": 1}, "slow");
    console.log ('Hello intro1 photobank');
  } else {
    $('#statusQuoPhotos').animate({"opacity": 0}, "slow");
  }
}, {offset: '90%'});

// Re-sticking intro1 for scroll away
$('#intro2').waypoint(function(direction) {
  if(direction == 'down'){
    $('#wrapperIntro1').removeClass('stuck').addClass('sticky-surpassed');
    console.log ('Bye intro1');
  } else {
    $('#wrapperIntro1').removeClass('sticky-surpassed').addClass('stuck');
  }
}, {offset: '100%'});

// Re-set audio and opacity after scrolling away from intro1
// $('#intro2').waypoint(function(direction) {
//   if(direction == 'down'){
//     console.log("Resetting audio and photos after intro1");
//     if (player.play) {
//       //is this volume animation even working???
//       player.animate({volume: 0.0}, 1000);
//       player.pause();
//       player.currentTime = 0;
//       player.animate({volume: 1.0}, 0);
//     } 
//     $('.headshot').css("opacity", 1);
//     $('#statusQuoPhotos').css("pointer-events", "none");
//   } else {
//     $('#statusQuoPhotos').css('pointer-events', 'auto');  
//   }
// }, {offset: '50%'});

//Fade Intro1 Photos into existence and make them clickable
// $('#intro1').waypoint(function (direction) {
//   $(document).scroll(function(){
//       // console.log("position relative to window: " + (intro1_Top - window.scrollY));
//       var scrollPercent2 = ((intro1_Top - window.scrollY) * -1) / 300;
//       // console.log(scrollPercent2);
//       $('#intro1b').css('opacity', scrollPercent2);
//   });
// });

// photoBank Click Listener try 3 - from stackoverflow, zer00ne
$('.photoBank').on('click', 'img', function(e) {
  var player = document.getElementById('player');
  var ID = $(this).attr('id');
  // For testing on local server vvVVvvV
  // var path = 'http://localhost:8000/audio/';
  var path = 'https://erinreiss.github.io/spaceship1/audio/';
  var SRC = path + ID + '.mp3';
  // console.log(this)
  // console.log('and')
  // console.log(SRC)
  // console.log(player.src)
  // OG -This is lazy coding, I should be able to give a common class to .headshotStatusQuo and .headshotInteractions
    // $('.headshotStatusQuo').css('opacity','.3');
    // $('.headshotInteractions').css('opacity','.3');
    // $(this).css('opacity','1');
  if (player.paused && (player.src === SRC)) {
    player.play();
  } else if (!player.paused && (player.src === SRC)) {
    player.pause();
  } else {
    player.pause();
    player.currentTime = 0;
    player.src = SRC;
    player.load();
    player.play();
  }
  var qID = "#" + $(this).attr('id') + "_quote";
  console.log(qID)
  $(qID).toggleClass("startOpacity0", 400);
   // Experiment
  $('.headshot').click(function(){
     $('.headshot').not(this).each(function(){
        $(this).animate({"opacity": .3});
     });
     $(this).animate({"opacity": 1});
  });
});

//Sticky for #intro2
var sticky_2 = new Waypoint.Sticky({
  element: $('#wrapperIntro2a')[0]
})

//Fade into intro2 ministory
var activateI2 = $('#wrapperIntro2a').waypoint(function (direction) {
  console.log('1st - 100px above trigger');
  // if(direction == 'down'){
  //   $('#alert1').addClass('secretStuck');
  // }
  // else {
  //   $('#alert1').removeClass('secretStuck');
  // }
// GETTING A BASTARD TO COUNT DOWN ON SCROLL DOWN
  $(document).scroll(function(e){
  //   console.log("intro2_Top_2: " + intro2_Top_2);
  //   console.log("window.scrollY: " + window.scrollY);
    var scrollPercent3 = (intro2_Top_2 - window.scrollY) / 100;
    // console.log(scrollPercent3);
      if(scrollPercent3 >= 0){
          $('#intro2_sub0, #intro2_sub00').css('opacity', scrollPercent3);
      }
  });
},{offset: 100});

// //Bring in alert1
// var activateI2_x = $('#wrapperIntro2a').waypoint(function (direction) {
//   console.log('2nd r -');
//   if(direction == 'down'){
//     $("#alert1").fadeIn("slow", function() {
//       $(this).removeClass("secretStuck_x");
//     });
//   }
//   else {
//     $("#alert1").fadeIn("slow", function() {
//       $(this).addClass("secretStuck_x");
//     });
//   }
// }, {offset: -20});

//alert1 click listener 
// D
// o

// M
// e

//Resticking intro2 for scrollaway
$('#wrapperIntro2a').waypoint(function (direction) {
  console.log('Bye intro2');
  if(direction == 'down'){
    $('#wrapperIntro2a').removeClass('stuck').addClass('sticky-surpassed');
  } else {
    $('#wrapperIntro2a').removeClass('sticky-surpassed').addClass('stuck');
  }
}, {offset: -125});

//sticky for #intro3
var sticky_3 = new Waypoint.Sticky({
  element: $('#wrapperIntro3')[0]
})

//Fade in/out intro3title and when #defineHeightIntro2a hits top of screen
$('#defineHeightIntro2a').waypoint(function (direction) {
  console.log('Hello intro3title');
  if(direction == 'down'){
    $('#intro3title').animate({"opacity": 1}, "slow");
    $("#intro2_sub1, #intro2_sub2").animate({"opacity": 0}, "slow");
  } else {
    $('#intro3title').animate({"opacity": 0}, "slow");
    $("#intro2_sub1, #intro2_sub2").animate({"opacity": 1}, "slow");
  }
});

//Fade in/out intro3 photos and quotes when #defineHeightIntro2a hits top of screen
$('#defineHeightIntro2a').waypoint(function (direction) {
  console.log('Hello intro3 photos and quotes');
  if(direction == 'down'){
    $('#intro3banks').animate({"opacity": 1});
  } else {
    $('#intro3banks').animate({"opacity": 0});
  }
}, {offset: -150});

// Un-sticking intro3 for scroll away
$('#intro4').waypoint(function(direction) {
  console.log ('Bye intro3');
  if(direction == 'down'){
    $('#wrapperIntro3').removeClass('stuck').addClass('sticky-surpassed');
  } else {
    $('#wrapperIntro3').removeClass('sticky-surpassed').addClass('stuck');
    // console.log ('Who,s bad going UPtown?');
  }
}, {offset: '100%'});

//Fade in/out intro4title and when #intro4 hits top of screen
$('#intro4').waypoint(function (direction) {
  console.log('hello intro4title');
  if(direction == 'down'){
    $('#intro4title').animate({"opacity": 1}, "slow");
  } else {
    $('#intro4title').animate({"opacity": 0}, "slow");
  }
});

//sticky for #intro4
var sticky_4 = new Waypoint.Sticky({
  element: $('#wrapperIntro4')[0]
})

//Fade in/out intro4 photos and quotes when #intro5a is 85% from top of screen
$('#intro5a').waypoint(function (direction) {
  console.log('Hello intro4 photos and quotes');
  if (player.play) {
      //is this volume animation even working???
      player.animate({volume: 0.0}, 1000);
      player.pause();
      player.currentTime = 0;
      player.animate({volume: 1.0}, 0);
      } 
  if(direction == 'down'){
    $('#interactionsPhotos').animate({"opacity": 1}, "slow");
  } else {
    $('#interactionsPhotos').animate({"opacity": 0}, "slow");
    $('.quote').addClass("startOpacity0", 400);
    $('.headshot').animate({"opacity": 1}, "slow");

  }
}, {offset: '85%'});

// Reset style and audio for intro4banks on scroll away when intro5 is 50% from top
$("#intro5a").waypoint(function (direction) {
  console.log('???');
  if(direction == 'down'){
    $('.headshot.intro4keep').animate({"opacity": 1}, "slow");
    $('.headshot.intro4leave').animate({"opacity": 0}, "slow");
    $('.quote.intro4keep').removeClass("startOpacity0", 400);
    $('.quote.intro4leave').addClass("startOpacity0", 400);
    $('.headshotInteractions').css("pointer-events", "none")
      if (player.play) {
      //is this volume animation even working???
      player.animate({volume: 0.0}, 1000);
      player.pause();
      player.currentTime = 0;
      player.animate({volume: 1.0}, 0);
      // player.load();
      } 
  } else {
    $('.headshotInteractions').css("pointer-events", "auto")
    $('.headshot').animate({"opacity": 1}, "slow");
    $('.quote.intro4keep').addClass("startOpacity0", 400);
  }
}, {offset: '50%'});

//sticky for #intro5a
var sticky_5a = new Waypoint.Sticky({
  element: $('#wrapperIntro5a')[0]
})

//Fade in/out intro4 10 px after intro5a hits top of screen
$('#wrapperIntro5a').waypoint(function (direction) {
  console.log('Bye intro 4, hello intro5a - big photos of kids');
  if(direction == 'down'){
    $('#wrapperIntro4').animate({"opacity": 0}, "slow");
    $('#wrapperIntro5a').animate({"opacity": 1}, "slow");
  } else {
    $('#wrapperIntro4').animate({"opacity": 1}, "slow");
    $('#wrapperIntro5a').animate({"opacity": 0}, "slow");
  }
}, {offset: -10});

//Fade in/out intro5b 20% before intro5a2para hits, and Un-sticking intro4
$('#intro5a2para').waypoint(function (direction) {
  console.log('???');
  $('.headshot').css("opacity", 1);
  if(direction == 'down'){
    $('#intro5a2para').animate({"opacity": 0}, "slow");
    $('#wrapperIntro5b').animate({"opacity": 1}, "slow");
    $('#wrapperIntro4').removeClass('stuck').addClass('sticky-surpassed');
  } else {
    $('#intro5a2para').animate({"opacity": 1}, "slow");
    $('#wrapperIntro5b').animate({"opacity": 0}, "slow");
    $('#wrapperIntro4').removeClass('sticky-surpassed').addClass('stuck');
  }
}, {offset: '20%'});
    
// Changing Police React 1 header to/from white background
$('#intro5b').waypoint(function (direction){
  console.log('Changing Police React 1 header to/from white background')
  if(direction == 'down'){
    $("#wrapperIntro5b").css("background-color", "white");
  } else {
    $("#wrapperIntro5b").css("background-color", "");
  }
});

//sticky for #intro5b
var sticky_5b = new Waypoint.Sticky({
  element: $('#wrapperIntro5b')[0]
})

//sticky for #intro5c
var sticky_5c = new Waypoint.Sticky({
  element: $('#wrapperIntro5c')[0]
})

//Reset audio and headshots when scrolling up from intro5c
$('#wrapperIntro5b').waypoint(function (direction) {
  if(direction == 'up'){
  console.log('reseting 5c audio')
    if (player.play) {
      //is this volume animation even working???
      player.animate({volume: 0.0}, 1000);
      player.pause();
      player.currentTime = 0;
      player.animate({volume: 1.0}, 0);
    } 
    $('.headshot').css("opacity", 1);
    $('.quoteVertical').addClass('startOpacity0');
  }
}, {offset: '10%'});

//Un/Re-stick wrapperIntro5c reseting audio
$('#wrapperIntro5d').waypoint(function (direction) {
  console.log("Bye 5c, hello 5d reset audio 5c");
  if (player.play) {
      //is this volume animation even working???
      player.animate({volume: 0.0}, 1000);
      player.pause();
      player.currentTime = 0;
      player.animate({volume: 1.0}, 0);
      } 
  //Headshot opacity reset not working
  $('.headshot').css("opacity", 1);
  $('.quoteVertical').addClass('startOpacity0');
  if(direction == 'down'){
    $('#wrapperIntro5c').removeClass('stuck').addClass('sticky-surpassed');
    $('#reaction1aPhotos').css("pointer-events", "none");
  } else {
    $('#wrapperIntro5c').removeClass('sticky-surpassed').addClass('stuck');
    $('#reaction1aPhotos').css('pointer-events', 'auto');
  }
}, {offset: '100%'});

//sticky for #intro5d
var sticky_5d = new Waypoint.Sticky({
  element: $('#wrapperIntro5d')[0]
})

//Un/Re-stick wrapperIntro5d
$('#wrapperIntro5e').waypoint(function (direction) {
  console.log("Bye 5d, hello 5e");
  if(direction == 'down'){
    $('#wrapperIntro5d').removeClass('stuck').addClass('sticky-surpassed');
  } else {
    $('#wrapperIntro5d').removeClass('sticky-surpassed').addClass('stuck');
  }
}, {offset: '100%'});

//sticky for #intro5e
var sticky_5e = new Waypoint.Sticky({
  element: $('#wrapperIntro5e')[0]
})

//Reset audio and headshots when scrolling up from intro5e THIS NEEDS A DIFF WAYPOINT
$('#wrapperIntro5e').waypoint(function (direction) {
  if(direction == 'up'){
  console.log('Resetting 5e audio on scroll up')
    if (player.play) {
      //is this volume animation even working???
      player.animate({volume: 0.0}, 1000);
      player.pause();
      player.currentTime = 0;
      player.animate({volume: 1.0}, 0);
    } 
    $('.headshot').css("opacity", 1);
    $('.quoteVertical').addClass('startOpacity0');
    $('#reaction1bPhotos').css("pointer-events", "none");
  } else {
    console.log("Restoring pointer-events for reaction1bPhotos");
    $('#reaction1bPhotos').css("pointer-events", "auto");
  }
});

//Fade out/in intro5a (big student photos)
$('#wrapperIntro6b').waypoint(function (direction) {
  console.log("Fade out/in 5a");
  if(direction == 'down'){
    $('#wrapperIntro5a').animate({"opacity": 0}, "slow");
  } else {
    $('#wrapperIntro5a').animate({"opacity": 1}, "slow");
  }
}, {offset: '120%'});

//Fade out/in intro5b, 5e and fade in/out 6a (big cop photos) and reset 5e audio
$('#wrapperIntro6b').waypoint(function (direction) {
  if(direction == 'down'){
    console.log("Fade out/in 5b and 5e and fade in/out 6a reset audio 5e");
    $('#wrapperIntro5b, #wrapperIntro5e').animate({"opacity": 0}, 800);
    $('#wrapperIntro6a').animate({"opacity": 1}, 800);
    if (player.play) {
      //is this volume animation even working???
      player.animate({volume: 0.0}, 1000);
      player.pause();
      player.currentTime = 0;
      player.animate({volume: 1.0}, 0);
    } 
    $('.headshot').css("opacity", 1);
    $('.quoteVertical').addClass('startOpacity0');
  } else {
    console.log("Fade out/in 5a and 5e and fade in/out 6a");
    $('#wrapperIntro5b, #wrapperIntro5e').animate({"opacity": 1}, 800);
    $('#wrapperIntro6a').animate({"opacity": 0}, 800);
  }
}, {offset: '100%'});

//sticky for #intro6a
var sticky_6a = new Waypoint.Sticky({
  element: $('#wrapperIntro6a')[0]
})

// Reset audio and headshots when scrolling up from intro6c
$('#wrapperIntro6b').waypoint(function (direction) {
  if(direction == 'up'){
  console.log('Resetting 6c audio and remove pointer-events')
    if (player.play) {
      //is this volume animation even working???
      player.animate({volume: 0.0}, 1000);
      player.pause();
      player.currentTime = 0;
      player.animate({volume: 1.0}, 0);
    } 
    $('.headshot').css("opacity", 1);
    $('.quoteVertical').addClass('startOpacity0');
    $('#reaction2Photos').css("pointer-events", "none");
  } else{
    console.log('Restore 6c pointer-events')
    $('#reaction2Photos').css("pointer-events", "auto");
  }
}, {offset: '10%'});

// Changing Students React header to/from white background
$('#intro6b').waypoint(function (direction){
  console.log('Changing Students React header to/from white background')
  if(direction == 'down'){
    $("#wrapperIntro6b").css("background-color", "white");
  } else {
    $("#wrapperIntro6b").css("background-color", "");
  }
});

//sticky for #intro6b
var sticky_6b = new Waypoint.Sticky({
  element: $('#wrapperIntro6b')[0]
})

//sticky for #intro6c
var sticky_6c = new Waypoint.Sticky({
  element: $('#wrapperIntro6c')[0]
})

//Fade out/in intro6a (big police photos)
$('#wrapperIntro7b').waypoint(function (direction) {
  console.log("Fade out/in 6a");
  if(direction == 'down'){
    $('#wrapperIntro6a').animate({"opacity": 0}, "slow");
  } else {
    $('#wrapperIntro6a').animate({"opacity": 1}, "slow");
  }
}, {offset: '120%'});

//Fade out/in intro6b, 6c and fade in/out 7a (big student2 photos) and reset 6c audio
$('#wrapperIntro7b').waypoint(function (direction) {
  console.log("Fade out/in 6b and 6c finally, and reset audio 6c and fade in/out 7a");
  if(direction == 'down'){
    $('#wrapperIntro6b, #wrapperIntro6c').animate({"opacity": 0}, 800);
    $('#wrapperIntro7a').animate({"opacity": 1}, 800);
    if (player.play) {
      //is this volume animation even working???
      player.animate({volume: 0.0}, 1000);
      player.pause();
      player.currentTime = 0;
      player.animate({volume: 1.0}, 0);
    } 
    $('.headshot').css("opacity", 1);
    $('.quoteVertical').addClass('startOpacity0');
  } else {
    $('#wrapperIntro6b, #wrapperIntro6c').animate({"opacity": 1}, 800);
    $('#wrapperIntro7a').animate({"opacity": 0}, 800);
  }
}, {offset: '100%'});

//Un/Re-stick wrapperIntro6a, 6b, 6c 30% before intro7 hits
$('#wrapperIntro7b').waypoint(function (direction) {
  console.log("Bye 6a, 6b, and 6c");
  if(direction == 'down'){
    $('#wrapperIntro6a, #wrapperIntro6b, #wrapperIntro6c').removeClass('stuck').addClass('sticky-surpassed');
  } else {
    $('#wrapperIntro6a, #wrapperIntro6b, #wrapperIntro6c').removeClass('sticky-surpassed').addClass('stuck');
  }
}, {offset: '30%'});

var sticky_7b = new Waypoint.Sticky({
  element: $('#wrapperIntro7b')[0]
})

//sticky for #intro7c
var sticky_6c = new Waypoint.Sticky({
  element: $('#wrapperIntro7c')[0]
})

// Reset audio and headshots when scrolling up from intro7c
$('#wrapperIntro7b').waypoint(function (direction) {
  if(direction == 'up'){
  console.log('Resetting 7c audio and remove pointer-events')
    if (player.play) {
      //is this volume animation even working???
      player.animate({volume: 0.0}, 1000);
      player.pause();
      player.currentTime = 0;
      player.animate({volume: 1.0}, 0);
    } 
    $('.headshot').css("opacity", 1);
    $('.quoteVerticalQuad').addClass('startOpacity0');
    $('#reaction3Photos').css("pointer-events", "none");
  } else{
    console.log('Restore 7c pointer-events')
    $('#reaction3Photos').css("pointer-events", "auto");
  }
}, {offset: '10%'});

//sticky for #intro8
var sticky_8 = new Waypoint.Sticky({
  element: $('#wrapperIntro8')[0]
})

//Fade out/in intro7a,b, c and reset audio 7c
$('#intro7d').waypoint(function (direction) {
  console.log("Fade out/in 7a,b,c and reset audio 6c")
  if(direction == 'down'){
    if (player.play) {
      //is this volume animation even working???
      player.animate({volume: 0.0}, 1000);
      player.pause();
      player.currentTime = 0;
      player.animate({volume: 1.0}, 0);
    } 
    $('.headshot').css("opacity", 1);
    $('.quoteVerticalQuad').addClass('startOpacity0');
    $('#wrapperIntro7a, #wrapperIntro7b, #wrapperIntro7c').animate({"opacity": 0}, 800);
  } else {
    $('#wrapperIntro7a, #wrapperIntro7b, #wrapperIntro7c').animate({"opacity": 1}, 800);
  }
}, {offset: "100%"});

//Fade Intro8 Gene and Rolleri Quotes into existence
$('#intro8').waypoint(function (e) {
  console.log('Start fading gene and rolleri in')
  $(document).scroll(function(){
      // console.log("position relative to window: " + (intro1_Top - window.scrollY));
      var scrollPercent3 = ((intro8_Top +50 - window.scrollY) * -1) / 200;
      // console.log(scrollPercent3);
      $('#intro8banks').css('opacity', scrollPercent3);
  });
}, {offset: -50});

//Fading thankyou photo down for the final view
$('#defineTimeIntro8').waypoint(function (direction) {
  console.log("Fade thank you photo, but not fully");
  if(direction == 'down'){
    $('#thankYouPhoto').animate({"opacity": .3}, 800);
  } else {
    $('#thankYouPhoto').animate({"opacity": 1}, 800);
  }
}, {offset: '90%'});

//I should redo my reset audio and headshot code with this type of waypoint definitions
$('#reaction1bPhotos').waypoint(function (direction) {
  if(direction == 'down'){
  console.log("Reaction1bPhotos come into view");
  } else {
  console.log("Reaction1bPhotos leave view");
  }
}, {offset: '100%'});


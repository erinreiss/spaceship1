// Remove all background colors
// $('*').css('background', 'transparent');

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

// Re-stcking intro1 for scroll away
$('#intro2').waypoint(function(direction) {
  if(direction == 'down'){
    $('#wrapperIntro1').removeClass('stuck').addClass('sticky-surpassed');
    // console.log ('Who,s bad going DOWNtown?');
  } else {
    $('#wrapperIntro1').removeClass('sticky-surpassed').addClass('stuck');
    // console.log ('Who,s bad going UPtown?');
  }
}, {offset: '100%'});

//Fade Intro1 Photos into existence and make them clickable
var activateI1 = $('#intro1').waypoint(function (direction) {
  // console.log('ba-boomba-boom!');
  $(document).scroll(function(){
      // console.log("position relative to window: " + (intro1_Top - window.scrollY));
      var scrollPercent2 = ((intro1_Top - window.scrollY) * -1) / 300;
      // console.log(scrollPercent2);
      $('#intro1b').css('opacity', scrollPercent2);
      if (scrollPercent2 >= .94){
        $('.headshotStatusQuo').css('pointer-events', 'auto')
      }
      else {
        $('.headshotStatusQuo').css('pointer-events', 'none')
      }
  });
});

// photoBank Click Listener try 3 - from stackoverflow, zer00ne
$('.photoBank').on('click', 'img', function(e) {
  var player = document.getElementById('player');
  var ID = $(this).attr('id');
  // For testing on local server vvVVvvV
  var path = 'http://localhost:8000/audio/';
  // var path = 'https://erinreiss.github.io/spaceship1/audio/';
  var SRC = path + ID + '.mp3';
  // console.log(this)
  // console.log('and')
  // console.log(SRC)
  // console.log(player.src)
  // This is lazy coding, I should be able to give a common class to .headshotStatusQuo and .headshotInteractions
  $('.headshotStatusQuo').css('opacity','.3');
  $('.headshotInteractions').css('opacity','.3');
  $(this).css('opacity','1');
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
var activateI2_x = $('#wrapperIntro2a').waypoint(function (direction) {
  console.log('2nd - 125 after trigger');
  if(direction == 'down'){
    $('#wrapperIntro2a').removeClass('stuck').addClass('sticky-surpassed');
    // console.log ('Who,s bad going DOWNtown?');
  } else {
    $('#wrapperIntro2a').removeClass('sticky-surpassed').addClass('stuck');
    // console.log ('Who,s bad going UPtown?');
  }
}, {offset: -125});

//sticky for #intro3
var sticky_3 = new Waypoint.Sticky({
  element: $('#wrapperIntro3')[0]
})

//Fade in intro3title when #defineHeightIntro2a hits top of screen
var activateI3 = $('#defineHeightIntro2a').waypoint(function (direction) {
  console.log('sweet music');
  if(direction == 'down'){
    $('#intro3title').animate({"opacity": 1});
  } else {
    $('#intro3title').animate({"opacity": 0});
  }
});

// Interactions Click Listener for quotes (should be able to combine with photoBank click listner, above)
$('#interactionsPhotos').on('click', 'img', function(e) {
  var qID = "#" + $(this).attr('id') + "_quote";
  console.log(qID)
  $(qID).css('visibility','visible');
});

// Attempt 2 at a waypoint to disapear photos in Interactions, more elegant
var interactionsTitle = $('#interactionsTitle').waypoint(function (direction) {
  // console.log('bam!');
  if(direction == 'down'){
    $('#martha_interactions').addClass('headshotInteractions_W');
  } else {
    $('#martha_interactions').removeClass('headshotInteractions_W');
  }
}, {offset: 300});

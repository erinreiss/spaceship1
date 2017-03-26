// Set up some variables. Do I need this? What is matchdata??

var headshot = $(".headshot");
var headshotStatusQuo = $(".headshotStatusQuo");
var matchData;

//Log Scroll amount in intro1
// $("#intro1inner").scroll(function() {
//          var screenheight = parseInt($(document).height());
//          var scrolledpx = parseInt($("#intro1inner").scrollTop());     
//          var sum = screenheight+scrolledpx;
//          console.log($("#intro1").scrollTop());
//          console.log("screen: " + screenheight);
//          console.log("sum=" + sum);
//          $("div.#introRect").height(sum);
// })

//Fading landing with scroll (THIS WORKS)
var target = $('#landing');
var targetHeight = 200;
// $(document).scroll(function(e){
    // var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
//     if(scrollPercent >= 0){
//         target.css('opacity', scrollPercent);
//     }
// });

//Abandoned and unnecesary attempt to make #intro1b appear w downscroll and appear w upscroll (wihtout waypoints)
// var lastScrollTop = 0;
// var target = $('#intro1inner');

// $('#intro1inner').scroll(function(event){
//    var changeAA = $(this).scrollTop();
//     console.log(changeAA)

//    if (changeAA > lastScrollTop){
//        // downscroll code
//        $('#intro1inner').scroll(function(){
//               // console.log('changeA:' + changeAA)
//               var scrollPercent = (250 - changeAA) / 250;
//                 $('#intro1b').css('opacity', scrollPercent);
//         })
       
//        // upscroll code

//    }  else {
//       console.log('booboo scroll up')
        
//       }
//    lastScrollTop = changeAA;
// });

//make #intro1b fade in with scroll down (wihtout waypoints)
var target = $('#intro1inner');
$('#intro1inner').scroll(function(){
      var changeA = target.scrollTop()
      console.log('changeA:' + changeA)
    // var scrollPercent = ((targetHeight / 2) - changeA) / targetHeight;
    var scrollPercent = changeA / 250;
    console.log('scrollPercent:' + scrollPercent)
    // if(scrollPercent >= 0){
        $('#intro1b').css('opacity', scrollPercent);
    // }
    if (scrollPercent >= .99){
      $('#introRect').css('pointer-events', 'none')
    }
    else {
      $('#introRect').css('pointer-events', 'auto')
    }
});

//make #intro1b fade out with scroll down (wihtout waypoints)
// var target = $('#intro1inner');
// $('#intro1inner').scroll(function(){
//       var changeA = target.scrollTop()
//       console.log('changeA:' + changeA)
//     // var scrollPercent = ((targetHeight / 2) - changeA) / targetHeight;
//     var scrollPercent = (250 - changeA) / 250;
//     // if(scrollPercent >= 0){
//         $('#intro1b').css('opacity', scrollPercent);
//     // }
// });

// Fade landing, with 200 pixels offset
// var intro1 = $('#intro1').waypoint(function (direction) {
//     console.log('bam!');
//     $(document).scroll(function(e){
//       var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
//         if(scrollPercent >= 0){
//             target.css('opacity', scrollPercent);
//         }
//     })
// }, {offset: 200});

// Intro 1, Bringing Into Exisitence (THIS WORKS)
// var statusQuoPhotos = $('#statusQuoPhotos').waypoint(function (direction) {
//   console.log('bam!');
//   if(direction == 'down'){
//     $('#statusQuoPhotos').fadeTo(600,1);
//   } else {
//         $('#statusQuoPhotos').fadeTo(600,0);
//   }
// }, {offset: 'bottom-in-view'});

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

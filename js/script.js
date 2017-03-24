// Set up some variables. Do I need this? What is matchdata??

var headshot = $(".headshot");
var headshotStatusQuo = $(".headshotStatusQuo");
var matchData;

//Log Scroll amount in intro1
// $("#intro1").scroll(function() {
//          var screenheight = parseInt($(document).height());
//          var scrolledpx = parseInt($("#intro1").scrollTop());     
//          var sum = screenheight+scrolledpx;
//          console.log($("#intro1").scrollTop());
//          console.log("screen: " + screenheight);
//          console.log("sum=" + sum);
//          $("div.#intro1inner").height(sum);
// })

//Fading landing with scroll (THIS WORKS)
var target = $('#landing');
var targetHeight = 200;
// $(document).scroll(function(e){
//     var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
//     if(scrollPercent >= 0){
//         target.css('opacity', scrollPercent);
//     }
// });

// Fade landing, with 200 pixels offset
var intro1 = $('#intro1').waypoint(function (direction) {
    console.log('bam!');
    $(document).scroll(function(e){
      var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
        if(scrollPercent >= 0){
            target.css('opacity', scrollPercent);
        }
    })
}, {offset: 200});

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

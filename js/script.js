// Set up some variables. Do I need this? What is matchdata??
var headshot = $(".headshot");
var headshotStatusQuo = $(".headshotStatusQuo");
var matchData;
var intro1_Top = $('#intro1').offset().top;
var intro2_Top = $('#intro2').offset().top;  

//Delayed fading landing with scroll
var intro1Activate = $('#intro1').waypoint(function (direction) {
  $(document).scroll(function(e){
      // console.log("position relative to window: " + (intro1_Top - window.scrollY));
    var scrollPercent = ((intro1_Top - window.scrollY)) / 350;
      if(scrollPercent >= 0){
          $('#intro0').css('opacity', scrollPercent);
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

//First attempt at sticky: #intro1
var sticky = new Waypoint.Sticky({
  element: $('#wrapperIntro1')[0]
})

//Bring Intro1 Photos into existence and make them clickable
var activateI1 = $('#intro1').waypoint(function (direction) {
  console.log('ba-boomba-boom!');
  $(document).scroll(function(){
      // console.log("position relative to window: " + (intro1_Top - window.scrollY));
      var scrollPercent = ((intro1_Top - window.scrollY) * -1) / 300;
      // console.log(scrollPercent);
      $('#intro1b').css('opacity', scrollPercent);
      if (scrollPercent >= .94){
        $('.headshotStatusQuo').css('pointer-events', 'auto')
      }
      else {
        $('.headshotStatusQuo').css('pointer-events', 'none')
      }
  });
});

// //De-activate #intro1 try 1
// var deActiveIntro1 = $('#intro1').waypoint(function (direction) {
//   if(direction == 'down'){
//     sticky.destroy()
//     $('#wrapperIntro1').addClass("postActivateIntro1");
//   } 
//   else {
//     $('#wrapperIntro1').removeClass("postActivateIntro1");
//   }
// }, {offset: 'bottom-in-view'});

// //De-activate #intro1 try 2
// var intro2inview = new Waypoint.Inview({
//   element: $('#intro2')[0],
//   enter: function(direction) {
//     $(document).scroll(function(){
//       console.log("introTop2: " + intro2_Top);
//       console.log("window.scrollY: " + window.scrollY);
//       console.log("Position2 relative to window: " + (intro2_Top - window.scrollY));
//       var winheight = $(window).height()
//       console.log("Window height: " + winheight);
//       var scrollPercent2 = (intro2_Top - window.scrollY)/ (4 * winheight);
//       console.log(scrollPercent2);
//       $('#intro1').css('opacity', scrollPercent2);
//       // if (scrollPercent >= .94){
//       //   $('.headshotStatusQuo').css('pointer-events', 'auto')
//       // }
//       // else {
//       //   $('.headshotStatusQuo').css('pointer-events', 'none')
//       // }
//   });
//   },
//   // entered: function(direction) {
//   //   notify('Entered triggered with direction ' + direction)
//   // },
//   // exit: function(direction) {
//   //   notify('Exit triggered with direction ' + direction)
//   // },
//   // exited: function(direction) {
//   //   notify('Exited triggered with direction ' + direction)
//   // }
// })

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

//Instantiate ScrollStory
$(function(){
  $("#container").scrollStory();
});

//Just for testing ScrollStory Instantiations
// $('#container').on('click', 'div', function() {
//     console.log('a');
//     console.log(this.distanceToOffest);
//     console.log('b');
//     console.log(this.adjustedDistanceToOffset);
//     console.log('c');
//     console.log(this.scrollOffset);
//     console.log('d');
//     console.log(this.triggerOffset);
//     console.log(this.class);
//     console.log(this.id);
// });

// // Set up some variables. Do I need this? What is matchdata??
// var headshot = $(".headshot");
// var headshotStatusQuo = $(".headshotStatusQuo");
// var matchData;

// // //Delayed fading landing with scroll
// var intro1Activate = $('#story0-1').waypoint(function (direction) {
//   $(document).scroll(function(e){
//     var intro1_Top = $('#story0-1').offset().top;  
//       console.log("position relative to window: " + (intro1_Top - window.scrollY));
//     var scrollPercent = ((intro1_Top - window.scrollY)) / 350;
//       if(scrollPercent >= 0){
//           $('#story0-0').css('opacity', scrollPercent);
//       }
//   });

// }, {offset: 350});

// //Delayed fading on landing with scroll SCROLLSTORY

// //Autoscroll to #story0-1 THIS WORKS
// // var interactionsTitle = $('#story0-1').waypoint(function (direction) {
// //   // console.log('ba-boom!');
// //   if(direction == 'down'){
// //     $('html, body').animate({
// //         scrollTop: $("#story0-1").offset().top
// //     }, 2000);
// //   }
// // }, {offset: 200});

// //Activate #story0-1
// var interactionsTitle = $('#story0-1').waypoint(function (direction) {
//   console.log('ba-boomba-boom!');
//   if(direction == 'down'){
//     $('#intro1inner').css('overflow', 'auto')
//   }
//   else {
//     $('#intro1inner').css('overflow', 'inherit')
//   }
//     // $('#story0-1').hide(0).show(0);
//     // $('#intro1inner').hide(0).show(0);
//     // $('#introRect').hide(0).show(0);
//     // $('#container').hide(0).show(0);
// }, {offset: -45});

// //make #intro1b fade in with scroll down (without waypoints) THIS WORKS
// var target = $('#intro1inner');
// $('#intro1inner').scroll(function(){
//       var changeA = target.scrollTop()
//       console.log('changeA:' + changeA)
//     var scrollPercent = changeA / 250;
//     console.log('scrollPercent:' + scrollPercent)
//     // if(scrollPercent >= 0){
//         $('#intro1b').css('opacity', scrollPercent);
//     // }
//     if (scrollPercent >= .99){
//       $('#introRect').css('pointer-events', 'none')
//     }
//     else {
//       $('#introRect').css('pointer-events', 'auto')
//     }
// });


// // Intro 1, Bringing Into Exisitence (THIS WORKS)
// // var statusQuoPhotos = $('#statusQuoPhotos').waypoint(function (direction) {
// //   console.log('bam!');
// //   if(direction == 'down'){
// //     $('#statusQuoPhotos').fadeTo(600,1);
// //   } else {
// //         $('#statusQuoPhotos').fadeTo(600,0);
// //   }
// // }, {offset: 'bottom-in-view'});

// photoBank Click Listener try 3 - from stackoverflow, zer00ne
// $('.photoBank').on('click', 'img', function(e) {
//   var player = document.getElementById('player');
//   var ID = $(this).attr('id');
//   // For testing on local server vvVVvvV
//   var path = 'http://localhost:8000/audio/';
//   // var path = 'https://erinreiss.github.io/spaceship1/audio/';
//   var SRC = path + ID + '.mp3';
//   // console.log(this)
//   // console.log('and')
//   // console.log(SRC)
//   // console.log(player.src)
//   // This is lazy coding, I should be able to give a common class to .headshotStatusQuo and .headshotInteractions
//   $('.headshotStatusQuo').css('opacity','.3');
//   $('.headshotInteractions').css('opacity','.3');
//   $(this).css('opacity','1');
//   if (player.paused && (player.src === SRC)) {
//     player.play();
//   } else if (!player.paused && (player.src === SRC)) {
//     player.pause();
//   } else {
//     player.pause();
//     player.currentTime = 0;
//     player.src = SRC;
//     player.load();
//     player.play();
//   }
// });

// // Interactions Click Listener for quotes (should be able to combine with photoBank click listner, above)
// $('#interactionsPhotos').on('click', 'img', function(e) {
//   var qID = "#" + $(this).attr('id') + "_quote";
//   console.log(qID)
//   $(qID).css('visibility','visible');
// });

// // Attempt 2 at a waypoint to disapear photos in Interactions, more elegant
// var interactionsTitle = $('#interactionsTitle').waypoint(function (direction) {
//   // console.log('bam!');
//   if(direction == 'down'){
//     $('#martha_interactions').addClass('headshotInteractions_W');
//   } else {
//     $('#martha_interactions').removeClass('headshotInteractions_W');
//   }
// }, {offset: 300});

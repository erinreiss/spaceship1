// Scroll fade for intro paragraphs (attempt)

// $(window).scroll(function(){
//     $("#intro").css("opacity", 1 - $(window).scrollTop() / 250);
//   });

// Set up some variables. Do I need this? What is matchdata??

var headshot = $(".headshot");
var headshotStatusQuo = $(".headshotStatusQuo");
var matchData;

// StatusQuo Click Listener try 1 - from manhadun
// $(headshotStatusQuo).click(
// 	function(){
// 		console.log(this.id);
// 		$('.headshotStatusQuo').css('opacity','.3');
// 		$(this).css('opacity','1');
// 		var thisID = ("audio/" + this.id + ".mp3");
//   		console.log(thisID);	
//   	changeTrack(thisID);	
			
// 	}
// );

// StatusQuo Click Listener try 2 - if/else
// $(headshotStatusQuo).click(
// 	function(){
// 		console.log(this.id);
// 		$('.headshotStatusQuo').css('opacity','.3');
// 		$(this).css('opacity','1');
// 		var thisID = ("audio/" + this.id + ".mp3");
//   		console.log(thisID);	
//   			if (thisID.paused == false) {
//       			thisID.pause();
//       			} 
//       		else {
//       			changeTrack(thisID);
//  				 }
			
// 	}
// );

// photoBank Click Listener try 3 - from stackoverflow, zer00ne
$('.photoBank').on('click', 'img', function(e) {
  var player = document.getElementById('player');
  var ID = $(this).attr('id');
  var path = 'https://erinreiss.github.io/spaceship1/audio/';
  var SRC = path + ID + '.mp3';
  console.log(this)
  console.log('and')
  console.log(SRC)
  console.log(player.src)
  $('.headshotStatusQuo').css('opacity','.3');
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

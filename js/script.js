// Scroll fade for intro paragraphs (attempt)

// $(window).scroll(function(){
//     $("#intro").css("opacity", 1 - $(window).scrollTop() / 250);
//   });

// Set up some variables. Do I need this? What is matchdata??

var headshot = $(".headshot");
var headshotStatusQuo = $(".headshotStatusQuo");
var matchData;


// Interactions Click Listener try 2 - sound bank
	// var audio1 = $("#damontea_interactions_a")[0];
	// $('#damontea_interactions').click(function() {
	//   	audio1.pause();
 //    	audio1.load();
 //    	audio1.play();
	// });

	// var audio2 = $("#mbF")[0];
	// $('#fujianese').click(function() {
	//   	audio2.pause();
 //    	audio2.load();
 //    	audio2.play();
	// });
	// var audio3 = $("#mbM")[0];
	// $('#mandarin').click(function() {
	//   	audio3.pause();
 //    	audio3.load();
 //    	audio3.play();
	// });
	// var audio4 = $("#mbC")[0];
	// $('#cantonese').click(function() {
	//   	audio4.pause();
 //    	audio4.load();
 //    	audio4.play();
	// });

// StatusQuo Click Listener try 1 - audio player
$(headshotStatusQuo).click(
	function(){
		console.log(this.id);
		// $('#clickStreet').css('visibility','hidden');
		// $('#streetsBar').css('visibility','visible');
		var thisID = ("audio/" + this.id + ".mp3");
			console.log(thisID);
		// for(var i=0;i<matchData.length;i++) {
		// 	if(matchData[i].id == thisID) {
		// 		// console.log(matchData[i].audioFill);
		// 		$('.nameFill').text(matchData[i].nameFill);
		// 		$('.jobFill').text(matchData[i].jobFill);
		// 		$('.timeFill').text(matchData[i].timeFill);
		// 		$('.fromFill').text(matchData[i].fromFill);
		// 		$('.bioFill').html("&ldquo;" + matchData[i].bioFill + "&rdquo;");
		// 		$('#streetTitleCh').html("&ldquo;" + matchData[i].streetTitleCh + "&rdquo;");
		// 		$('#streetTitleEn').text(matchData[i].streetTitleEn);
				changeTrack(thisID);	
		// 		$('#speakerPhoto').attr("src",matchData[i].speakerPhoto)
		// 		changeTrack(matchData[i].audioFill);		
		//		break;
		// 	}
		// }
	}
);

//Second Audio Player NOT WORKING function to reload StatusQuo audio player on each click

// function changeTrack(sourceUrl) {
//     var audioDues = $("#playerStatusQuo");      
//     $("#audioFillStatusQuo").attr("src", sourceUrl);
//     audioDues[0].pause();
//     audioDues[0].load();//suspends and restores all audio element
//     audioDues[0].play();
// }

// Interactions Click Listener try 1 - audio player
$(headshot).click(
	function(){
		console.log(this.id);
		// $('#clickStreet').css('visibility','hidden');
		// $('#streetsBar').css('visibility','visible');
		var thisID = ("audio/" + this.id + ".mp3");
			console.log(thisID);
		// for(var i=0;i<matchData.length;i++) {
		// 	if(matchData[i].id == thisID) {
		// 		// console.log(matchData[i].audioFill);
		// 		$('.nameFill').text(matchData[i].nameFill);
		// 		$('.jobFill').text(matchData[i].jobFill);
		// 		$('.timeFill').text(matchData[i].timeFill);
		// 		$('.fromFill').text(matchData[i].fromFill);
		// 		$('.bioFill').html("&ldquo;" + matchData[i].bioFill + "&rdquo;");
		// 		$('#streetTitleCh').html("&ldquo;" + matchData[i].streetTitleCh + "&rdquo;");
		// 		$('#streetTitleEn').text(matchData[i].streetTitleEn);
				changeTrack(thisID);	
		// 		$('#speakerPhoto').attr("src",matchData[i].speakerPhoto)
		// 		changeTrack(matchData[i].audioFill);		
		//		break;
		// 	}
		// }
	}
);

//function to reload audio player on each click

function changeTrack(sourceUrl) {
    var audioDues = $("#player");      
    $("#audioFill").attr("src", sourceUrl);
    audioDues[0].pause();
    audioDues[0].load();//suspends and restores all audio element
    audioDues[0].play();
}
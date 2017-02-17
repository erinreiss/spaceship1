// On Load, give a class of "hLights" to all rects in "highlights" and set up some variables

$("#highlights rect").attr("class", "hLights");
var hLights = $(".hLights");
var matchData;

//Load CSV Content using Json

$.getJSON("convertcsv.json", 
	function(content){
    	console.log(content);
    	matchData = content;
    }
);

// Street Highlights fade in & out on hover

$(hLights).mouseenter(
	function(){
		// console.log("enter");
		// console.log(this.id);
		$(this).fadeTo("opacity", ".39");
	}
);

$(hLights).mouseleave(
	function(){
		// console.log("exit");
		$(this).fadeTo("opacity", "0");
	}
);

// Next Click Listeners
$('#next1').click(
	function(){
		$('.intro1').css('visibility','hidden');
		$('#skipIntro').css('visibility','visible');
		$('.intro2').css('visibility','visible');
	}
);

$('#next2').click(
	function(){
		$('.intro2').css('visibility','hidden');
		$('#intro3eng').css('visibility','visible');
		$('.intro3').css('visibility','visible');
	}
);

$('#next3').click(
	function(){
		console.log(this);
		$('.intro3').css('display','none');
		$('.intro3boxes').css('display','none');
		$('.intro4').css('visibility','visible');
		$('#skipIntro').css('display','none');
	}
);

$('#next4').click(
	function(){
		console.log(this);
		$('#intro4').css('visibility','hidden');
		$('.intro4').css('visibility','hidden');
		$(hLights).css('visibility','visible');
		$('#clickStreet').css('visibility','visible');
	}
);

// Next3 Element Click Listeners, why are you so lazy?

$('#english').click(
	function(){
		$('#intro3eng').css('visibility','visible');
		$('#intro3man').css('visibility','hidden');
		$('#intro3fuj').css('visibility','hidden');
		$('#intro3can').css('visibility','hidden');
	}
);
$('#mandarin').click(
	function(){
		$('#intro3eng').css('visibility','hidden');
		$('#intro3man').css('visibility','visible');
		$('#intro3fuj').css('visibility','hidden');
		$('#intro3can').css('visibility','hidden');
	}
);
$('#fujianese').click(
	function(){
		$('#intro3eng').css('visibility','hidden');
		$('#intro3man').css('visibility','hidden');
		$('#intro3fuj').css('visibility','visible');
		$('#intro3can').css('visibility','hidden');
	}
);
$('#cantonese').click(
	function(){
		$('#intro3eng').css('visibility','hidden');
		$('#intro3man').css('visibility','hidden');
		$('#intro3fuj').css('visibility','hidden');
		$('#intro3can').css('visibility','visible');
	}
);

	//Next3 Element Sound Click Listeners
	var audio1 = $("#mbE")[0];
	$('#english').click(function() {
	  	audio1.pause();
    	audio1.load();
    	audio1.play();
	});
	var audio2 = $("#mbF")[0];
	$('#fujianese').click(function() {
	  	audio2.pause();
    	audio2.load();
    	audio2.play();
	});
	var audio3 = $("#mbM")[0];
	$('#mandarin').click(function() {
	  	audio3.pause();
    	audio3.load();
    	audio3.play();
	});
	var audio4 = $("#mbC")[0];
	$('#cantonese').click(function() {
	  	audio4.pause();
    	audio4.load();
    	audio4.play();
	});

// Skip Intro Click Listener

$('#skipIntro').click(
	function(){
		$('#skipIntro').css('visibility','hidden');
		$('.introPop').css('display','none');
		$(hLights).css('visibility','visible');
		$('#clickStreet').css('visibility','visible');
	}
);

// Streets Click Listener
$(hLights).click(
	function(){
		$('#clickStreet').css('visibility','hidden');
		$('#streetsBar').css('visibility','visible');
		var thisID = (this.id);
		// console.log(thisID);
		for(var i=0;i<matchData.length;i++) {
			if(matchData[i].id == thisID) {
				// console.log(matchData[i].audioFill);
				$('.nameFill').text(matchData[i].nameFill);
				$('.jobFill').text(matchData[i].jobFill);
				$('.timeFill').text(matchData[i].timeFill);
				$('.fromFill').text(matchData[i].fromFill);
				$('.bioFill').html("&ldquo;" + matchData[i].bioFill + "&rdquo;");
				$('#streetTitleCh').html("&ldquo;" + matchData[i].streetTitleCh + "&rdquo;");
				$('#streetTitleEn').text(matchData[i].streetTitleEn);
				$('#speakerPhoto').attr("src",matchData[i].speakerPhoto)
				changeTrack(matchData[i].audioFill);
				break;
			}
		}
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

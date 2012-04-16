//**********Global**********//

//Disabling all anchor tags
/*
$("a").click(function(){
	
	alert('disabled');
    return false;

});
*/
var categoryChosen;
var topicChosen;

//Header Home Button
//Reset Local Vars
$("#homeButton").click(function() { 
  console.log("Topic Set: none");
  localStorage.setItem("categoryChosen", "");
  localStorage.setItem("topicChosen", "");
  document.location.href='/';
});


//Header Topic Button
$("#changeTopic").click(function() { 
  document.location.href='/topics';
});


//Welcome - Enter Button
$("#welcomeButton").click(function() { 
  document.location.href='/categories';
});




//Made these POST-submit buttons
//Choose Category - Setting Local Vars for front-end access
$("#categoryWords").click(function() { 
	console.log("Category Set: Words ");
	localStorage.setItem("categoryChosen", "Words");	
});

$("#categoryHeadlines").click(function() { 
	console.log("Category Set: Headlines ");
	localStorage.setItem("categoryChosen", "Headlines");	
});



//Choose level
$("#chooseLevelOne").click(function() { 
	document.location.href="/instructions_level_I";
});
$("#chooseLevelTwo").click(function() { 
	document.location.href="/instructions_level_II";
});
$("#chooseLevelThree").click(function() { 
	document.location.href="/instructions_level_III";
});


//Header Help Button



$("#news").click(function() { 
	
	console.log("Topic Set: News");
	localStorage.setItem("topicChosen", "News");
	document.location.href='/news';	
	
});

$("#travel").click(function() { 
	
	console.log("Topic Set: Travel");
	localStorage.setItem("topicChosen", "Travel");
	document.location.href='/travel';
	
});

$("#weather").click(function() { 

	console.log("Topic Set: Weather");
	localStorage.setItem("topicChosen", "Weather");
	document.location.href='/weather';	
	
});	




$("#helpButton").click(function() {
	console.log("Help is pressed"); 
	
	$('.gameBoard').hide();
	$('#helpInstructions').show();
	
	$("#showStory").hide();
	$("#showStoryHeadline").hide();
	$("#showStoryText").hide();
	
	
	
	//$('#helpInstructionsSmall').hide(); 
		
	//not using these buttons anymore
	/*
	$('#helpChoices').show();
	$('#helpInstructions').hide();
	$('.checkAnswer').hide();
	*/
});




//Help - Change Topic
$("#changeTopic").click(function() { 
	
	console.log("Topic Set: ");
	localStorage.setItem("topicChosen", "");
	document.location.href='/topics';
	
});



$('#changeLevel').click(function() {
	console.log("Change Level Pressed");
	var topicChosen = localStorage.getItem("topicChosen");
	console.log(topicChosen);
	if (topicChosen == "News") {
		document.location.href='/news';
	}
	else if (topicChosen == "Travel") {
		document.location.href='/travel';
	}
	else if (topicChosen == "Weather"){
		document.location.href='/weather';
	}
	else {
		document.location.href='/topics';
	}
});


var finishedWordsLevelOne = false;
var finishedWordsLevelTwo = false;
var finishedWordsLevelThree = false;

var finishedLevelOne = false;
var finishedLevelTwo = false;
var finishedLevelThree = false;


/*
//Help - Back to the Game
//NOT USING THIS ANYMORE
$("#backToTheGame").click(function() {

	if (finishedLevelOne){
		document.location.href='/storyscramble_level_I';
		}
	else if (finishedLevelTwo) {
		document.location.href='/storyscramble_level_II';
	}
	else if (finishedLevelThree) {
		document.location.href='/storyscramble_level_III';
	}
	else {
		$('.gameBoard').show();
		$('#helpChoices').hide();
		
		$("#showStory").hide();
		$("#showStoryHeadline").hide();
		$("#showStoryText").hide();
				
	}	
});

*/



//Toggle Instructions
$("#instructionsToggleButton").click(function() {
	$('#helpInstructionsSmall').toggle();
});




//Help - Instructions
$("#reviewInstructions").click(function() { 
	$('.gameBoard').hide();
	$('#helpChoices').hide();
	$('#helpInstructions').show();
	
});

//Help - Instructions - Back to the Game
$("#backToTheGameInstructions").click(function() { 

	if (finishedWordsLevelOne) {
		document.location.href='/storyscramble_level_I';
	}	
	else if (finishedWordsLevelTwo) {
		document.location.href='/storyscramble_level_II';
	}	
	else if (finishedWordsLevelThree) {
		document.location.href='/storyscramble_level_III';
	}
	else if (finishedLevelOne) {
		document.location.href='/storyscramble_level_I';
	}
	else if (finishedLevelTwo) {
		document.location.href='/storyscramble_level_II';
	}
	else if (finishedLevelThree) {
		document.location.href='/storyscramble_level_III';
	}
	else {
		$('.gameBoard').show();
		$('#helpInstructions').hide();
		
		$("#showStory").hide();
		$("#showStoryHeadline").hide();
		$("#showStoryText").hide();
			
	}
});



//Read Story - Back to the Game
$("#backToTheGameReadStory").click(function() { 

	if (finishedWordsLevelOne) {
		document.location.href='/storyscramble_level_I';
	}	
	else if (finishedWordsLevelTwo) {
		document.location.href='/storyscramble_level_II';
	}	
	else if (finishedWordsLevelThree) {
		document.location.href='/storyscramble_level_III';
	}	
	else if (finishedLevelOne) {
		document.location.href='/storyscramble_level_I';
	}
	else if (finishedLevelTwo) {
		document.location.href='/storyscramble_level_II';
	}
	else if (finishedLevelThree) {
		document.location.href='/storyscramble_level_III';
	}
	else {
		$('.gameBoard').show();
		$('#helpInstructions').hide();
		
		$("#showStory").hide();
		$("#showStoryHeadline").hide();
		$("#showStoryText").hide();
			
	}
});



//Make Cursor Live In Text Field
$("input:text:visible:first").focus();



//Clue Button 
$("#clueButton").click(function() { 
	console.log("Clue was pressed");	
	$('.clue').toggle();
});





//Page Titles
var pageTitle = document.getElementById('pageTitle');
var currentPageTitle = document.getElementById('currentPageTitle');
console.log(currentPageTitle);


var topicCurrent = localStorage.getItem("topicChosen");


var titleFiller = currentPageTitle.innerHTML;

//Remove topic choice if on home page
var homeTitle = "Story Scramble";
if (titleFiller == homeTitle){
	topicCurrent = "";
}

pageTitle.innerHTML = topicCurrent + " " + titleFiller;

console.log("Title Filler is: " + titleFiller);
console.log("PageTitle.innerHTML is: " + pageTitle.innerHTML);



//Page Booleans
var onWordsLevelOne = false;
var onWordsLevelTwo = false;
var onWordsLevelThree = false;

var onLevelOne = false;
var onLevelTwo = false;
var onLevelThree = false;

var wordsLevelOneTitle = "Level One - Words";
var wordsLevelTwoTitle = "Level Two - Words";
var wordsLevelThreeTitle = "Level Three - Words";

var levelOneTitle = "Level One";
var levelTwoTitle = "Level Two";
var levelThreeTitle = "Level Three";

if (titleFiller == wordsLevelOneTitle){
	
	onWordsLevelOne = true;
	onWordsLevelTwo = false;
	onWordsLevelThree = false;
	
	onLevelOne = false;
	onLevelTwo = false;
	onLevelThree = false;
	
	console.log("We're On Words Level One");
}

else if (titleFiller == wordsLevelTwoTitle){
	
	onWordsLevelOne = false;
	onWordsLevelTwo = true;
	onWordsLevelThree = false;
	
	onLevelOne = false;
	onLevelTwo = false;
	onLevelThree = false;
	
	console.log("We're On Words Level Two");
}

else if (titleFiller == wordsLevelThreeTitle){
	
	onWordsLevelOne = false;
	onWordsLevelTwo = false;
	onWordsLevelThree = true;
	
	onLevelOne = false;
	onLevelTwo = false;
	onLevelThree = false;
	
	console.log("We're On Words Level Three");
}

else if (titleFiller == levelOneTitle){

	onWordsLevelOne = false;
	onWordsLevelTwo = false;
	onWordsLevelThree = false;

	onLevelOne = true;
	onLevelTwo = false;
	onLevelThree = false;
	
	console.log("We're On Headlines Level One");
}
else if (titleFiller == levelTwoTitle) {

	onWordsLevelOne = false;
	onWordsLevelTwo = false;
	onWordsLevelThree = false;

	onLevelOne = false;
	onLevelTwo = true;
	onLevelThree = false;
	
	console.log("We're On Headlines Level Two");
}
else if (titleFiller == levelThreeTitle) {

	onWordsLevelOne = false;
	onWordsLevelTwo = false;
	onWordsLevelThree = false;

	onLevelOne = false;
	onLevelTwo = false;
	onLevelThree = true;
	
	console.log("We're On Headlines Level Three");
}


//Enter - Entry - Answer Variables

var levelOneEnter = document.getElementById('levelOneEnter'); 
var levelOneEntry = document.getElementById('levelOneEntry');
var levelOneAnswer = document.getElementById('levelOneAnswer');
/* soundCorrect = document.getElementById('soundCorrect_01');  */

var levelTwoEnter = document.getElementById('levelTwoEnter'); 
var levelTwoEntry = document.getElementById('levelTwoEntry');

var levelThreeEnter = document.getElementById('levelThreeEnter'); 
var levelThreeEntry = document.getElementById('levelThreeEntry');

var wrongAnswer = document.getElementById('wrongAnswer');


//inner HTML variables
if (onLevelTwo) {
	var levelTwoMasterHeadline = (document.getElementById('levelTwoHeadline').innerHTML).split(" ");
	var levelTwoWordCountIndex = (document.getElementById('levelTwoWordCountIndex').innerHTML).split(",");
	console.log("TLTWC 0 is: " + levelTwoWordCountIndex[0]);
	console.log("TLTWC 1 is: " + levelTwoWordCountIndex[1]);
	var levelTwoIndex = document.getElementById('levelTwoIndex').innerHTML;
}
else if (onLevelThree){
	//inner HTML variables
	var levelThreeMasterHeadline = (document.getElementById('levelThreeHeadline').innerHTML).split(" ");
	var levelThreeWordCountIndex = document.getElementById('levelThreeWordCountIndex').innerHTML;
	console.log("TLTWC is: " + levelThreeWordCountIndex)
}




//******************************Level I******************************//


//Level I - Give Me A Letter Logic

var letterCountLevelOne = 1;

var letterCounterLevelOne = function(){
	
	var levelOneAnswer = document.getElementById('levelOneAnswer');
	var stringOfLettersOne = levelOneAnswer.innerHTML;
	
	var levelOneEntry = document.getElementById('levelOneEntry');
	levelOneEntry.value = ""; 
	
	if (letterCountLevelOne <= stringOfLettersOne.length) {
		for (i = 0; i < letterCountLevelOne; i++){
			levelOneEntry.value = levelOneEntry.value + stringOfLettersOne[i]
		}
	}
	else if (letterCountLevelOne > stringOfLettersOne.length){
		levelOneEntry.value = levelOneAnswer.innerHTML; 
		$('#levelOneEnter').trigger('click');
	}		
	letterCountLevelOne++;
} 


$("#giveMeButtonLevelOne").click(function() { 
 	letterCounterLevelOne();
 });



//Level I - Check Answer Logic
	
		
						 
var checkLevelOneAnswer = function(){
	
	//this cleans it up for spaces
	var levelOneEnteredAnswer = levelOneEntry.value.trim();
	
	if (levelOneEnteredAnswer == levelOneAnswer.innerHTML) {
		
		if (onWordsLevelOne) {
			finishedWordsLevelOne = true;
			}
		else if (onWordsLevelTwo) {
			finishedWordsLevelTwo = true;
		}
		else if (onWordsLevelThree) {
			finishedWordsLevelThree = true;
		}
		else if (onLevelOne) {
			finishedLevelOne = true;
		}
		
		$('#gameBoardSection').hide();
				
		$('.checkAnswer').show();
		$('#levelOneCorrectAnswer').show();
		$('#levelOneWrongAnswer').hide();
		/* soundCorrect.play(); */	
	}
	
	else {
		
		$('#gameBoardSection').hide();

		$('.checkAnswer').show();
		$('#levelOneCorrectAnswer').hide();
		$('#levelOneWrongAnswer').show();		
		wrongAnswer.value = levelOneEntry.value;
	}	
};


$("#levelOneEnter").click(function() { 
	
 	checkLevelOneAnswer();
 });



//Headlines - Level I - Go On To Another Headline

//not using New anymore
$("#levelOneNew").click(function() { 
  document.location.href='/storyscramble_level_I';
});
$("#levelOneNext").click(function() { 
  document.location.href='/storyscramble_level_I';
});
//Not using Skip anymore
$("#levelOneSkip").click(function() { 
  document.location.href='/storyscramble_level_I';
});


//Words - Level I
$("#levelOneShortNext").click(function() { 
  document.location.href='/storyscramble_level_I';
});

$("#levelOneMedNext").click(function() { 
  document.location.href='/storyscramble_level_II';
});

$("#levelOneLongNext").click(function() { 
  document.location.href='/storyscramble_level_III';
});


//Level I - Try Again

$("#levelOneTryAgain").click(function() { 
  
  	$('#gameBoardSection').show();
		
	$('.checkAnswer').hide();

	levelOneEntry.value = wrongAnswer.value;
	letterCountLevelOne = 1;  
});





//******************************Level II******************************//


//Level II - Give Me A Letter Logic
var letterCountLevelTwo = 1;

var letterCounterLevelTwo = function(){
	
	var levelTwoAnswer = levelTwoMasterHeadline[levelTwoWordCountIndex[levelTwoIndex]];
	console.log(levelTwoAnswer);
	console.log("The Level 2 Index Value is: " + levelTwoIndex);
	console.log("The Current Answer is: " + levelTwoAnswer);
	var levelTwoChars = levelTwoAnswer.split(""); 
	
	var levelTwoEntry = document.getElementById('levelTwoEntry');
	levelTwoEntry.value = ""; 
	
	if (letterCountLevelTwo <= levelTwoChars.length) {
		for (i = 0; i < letterCountLevelTwo; i++){
			levelTwoEntry.value = levelTwoEntry.value + levelTwoChars[i]
		}
		console.log(letterCountLevelTwo);
	}
	else if (letterCountLevelTwo > levelTwoChars.length){
		levelTwoEntry.value = levelTwoAnswer;
		letterCountLevelTwo = 1;
		console.log (letterCountLevelTwo); 
		$('#levelTwoEnter').trigger('click');
		
	}		
	letterCountLevelTwo++;
} 


$("#giveMeButtonLevelTwo").click(function() { 
 	letterCounterLevelTwo();
 });



//Level II check answer	


var changeHighlightWordLevelTwo = function(idx){

	$('.highlightedWord').html(levelTwoMasterHeadline[levelTwoWordCountIndex[idx-1]]);
	$('.word').removeClass('highlightedWord')
	$('.word').removeClass('highlightedWordTwo')
	
	$('.word').each(function(index) {
   		if (levelTwoWordCountIndex[idx] == index){
   			$(this).addClass('highlightedWord')
   		}
   });				
}


											
var checkLevelTwoAnswer = function(){
	//console.log("Level 2 Answer Submitted");
	console.log("You Entered: " + levelTwoEntry.value);
	console.log("The Correct Answer is: " + levelTwoMasterHeadline[levelTwoWordCountIndex[levelTwoIndex]]);
	var currentScrambleAnswer = "";
	
	$('.scrambledWordItem').each(function(index) {
   		if (levelTwoIndex == index){
   			currentScrambleAnswer = $(this).html()
   			console.log("Current Scramble Answer = " + currentScrambleAnswer)
   		}
   		
   });
	
	//this cleans it up for spaces
	var levelTwoEnteredAnswer = levelTwoEntry.value.trim();
	
	if (levelTwoEnteredAnswer == levelTwoMasterHeadline[levelTwoWordCountIndex[levelTwoIndex]]) {
				
		$('#gameBoardSection').hide();
			
		$('#scrambledWordCorrect').val(currentScrambleAnswer);
		$('#correctAnswer').val(levelTwoMasterHeadline[levelTwoWordCountIndex[levelTwoIndex]]);
		console.log("Level Two index Is: " + levelTwoIndex)
		
		levelTwoIndex++;
		
		if (levelTwoIndex == 2) {
			
			finishedLevelTwo = true;
			
			$('.checkAnswer').show();
			$('#finalAnswer').show();
			
			$('#levelTwoCorrectAnswer').hide();
			$('#levelTwoWrongAnswer').hide();
			
			}
		else {
			$('#correctText').html("Correct!!!");
			
			$('.checkAnswer').show();
			$('#levelTwoCorrectAnswer').show();
			$('#finalAnswer').hide();
			$('#levelTwoWrongAnswer').hide();
		}
		
		
		
		letterCountLevelTwo = 1;
		
		
		changeHighlightWordLevelTwo(levelTwoIndex);	
	}
	
	else {

		$('#gameBoardSection').hide();
		$('#scrambledWordWrong').val(currentScrambleAnswer);
		$('.checkAnswer').show();
		$('#levelTwoCorrectAnswer').hide();
		$('#finalAnswer').hide();
		$('#levelTwoWrongAnswer').show();
		
		console.log("Level Two index Is: " + levelTwoIndex)
		
		wrongAnswer.value = levelTwoEntry.value;		
	}	
};

		
$("#levelTwoEnter").click(function() { 
	console.log("ENTER WAS PRESSED");
 	checkLevelTwoAnswer();
 });
	


	
	
//Level II - Go On To Another Headline


//Level II - New
$("#levelTwoNew").click(function() {

	levelTwoEntry.value = "";
	letterCountLevelTwo = 1;
	
	if(levelTwoIndex == 2) {
		levelTwoIndex = 0;
		document.location.href='/storyscramble_level_II';
		console.log("NEW WAS CLICKED")
		}
	else {
		$('#gameBoardSection').show();	
		$('.checkAnswer').hide();
		$('#levelTwoCorrectAnswer').hide();
		
	}  
});


//Level II - Next
$("#levelTwoNext").click(function() { 

	letterCountLevelTwo = 1;
	levelTwoEntry.value = "";
	
	if(levelTwoIndex == 1) {
		levelTwoIndex = 0;
		document.location.href='/storyscramble_level_II';
		console.log("NEXT WAS CLICKED");
		}
	else {
		console.log("NEXT WAS CLICKED - Current Level Two Index: " + levelTwoIndex);
		levelTwoIndex++;
		console.log("New Level Two Index: " + levelTwoIndex);
		changeHighlightWordLevelTwo(levelTwoIndex);
		$('#gameBoardSection').show();	
		$('.checkAnswer').hide();
		$('#levelTwoCorrectAnswer').hide();
	}	
});

//Level II - Skip
$("#levelTwoSkip").click(function() { 

	letterCountLevelTwo = 1;
	levelTwoEntry.value = "";

	if(levelTwoIndex == 1) {
			levelTwoIndex = 0;
			document.location.href='/storyscramble_level_II';
			console.log("SKIP WAS CLICKED")
		}
	else {
		levelTwoIndex++;
		changeHighlightWordLevelTwo(levelTwoIndex);
		$('#gameBoardSection').show();	
		$('.checkAnswer').hide();
		$('#levelTwoCorrectAnswer').hide();
	}
});


//Level II - Final Button
$("#levelTwoFinalButton").click(function() {

		levelTwoIndex = 0;
		document.location.href='/storyscramble_level_II';
		console.log("FINAL WAS CLICKED")
	
});




//Level II - Try Again
$("#levelTwoTryAgain").click(function() { 
  
  	$('#gameBoardSection').show();	
	$('.checkAnswer').hide();

	levelTwoEntry.value = wrongAnswer.value;
 
});






//******************************Level III******************************//


//Level III - Give Me A Letter Logic

var letterCountLevelThree = 1;

var letterCounterLevelThree = function(){
	
	var levelThreeAnswer = levelThreeMasterHeadline[levelThreeWordCountIndex];
	var levelThreeChars = levelThreeAnswer.split(""); 
	
	var levelThreeEntry = document.getElementById('levelThreeEntry');
	levelThreeEntry.value = ""; 
	
	if (letterCountLevelThree <= levelThreeChars.length) {
		for (i = 0; i < letterCountLevelThree; i++){
			levelThreeEntry.value = levelThreeEntry.value + levelThreeChars[i]
		}
		console.log(letterCountLevelThree);
	}
	else if (letterCountLevelThree > levelThreeChars.length){
		levelThreeEntry.value = levelThreeAnswer;
		letterCountLevelThree = 1;
		console.log (letterCountLevelThree); 
		$('#levelThreeEnter').trigger('click');
		
	}		
	letterCountLevelThree++;
} 


$("#giveMeButtonLevelThree").click(function() { 
	console.log("GIVE ME BUTTON WAS PRESSED");
 	letterCounterLevelThree();
 });



//Level III check answer	

var changeHighlightWordLevelThree = function(idx){

	$('.highlightedWord').html(levelThreeMasterHeadline[idx-1]);
	$('.word').removeClass('highlightedWord')
	
	$('.word').each(function(index) {
   		if (idx == index){
   			$(this).addClass('highlightedWord')
   		}
   });				
}

											
var checkLevelThreeAnswer = function(){
	console.log("Level 3 Answer Submitted");
	console.log("You Entered: " + levelThreeEntry.value);
	console.log("The Correct Answer is: " + levelThreeMasterHeadline[levelThreeWordCountIndex]);
	var currentScrambleAnswer = "";
	
	$('.scrambledWordItem').each(function(index) {
   		if (levelThreeWordCountIndex == index){
   			currentScrambleAnswer = $(this).html()
   		}
   });
	
	
	//this cleans it up for spaces
	var levelThreeEnteredAnswer = levelThreeEntry.value.trim();
	
	if (levelThreeEnteredAnswer == levelThreeMasterHeadline[levelThreeWordCountIndex]) {
				
		$('#gameBoardSection').hide();
			
		$('#scrambledWordCorrect').val(currentScrambleAnswer);
		$('#correctAnswer').val(levelThreeMasterHeadline[levelThreeWordCountIndex]);
		
		if (levelThreeWordCountIndex == levelThreeMasterHeadline.length - 1) {
			
			//$('#correctText').html("Great Job!!!");
			//$('#levelThreeNew').val("NEXT HEADLINE");
			
			finishedLevelThree = true;
			
			$('.checkAnswer').show();	
			$('#finalAnswer').show();
			
			$('#levelThreeCorrectAnswer').hide();
			$('#levelThreeWrongAnswer').hide();	
			
			}
		else {
			$('#correctText').html("Correct!!!");
			
			$('#finalAnswer').hide();
			$('#levelThreeCorrectAnswer').show();
			$('#levelThreeWrongAnswer').hide();
		}
		
		
		
		letterCountLevelThree = 1;
		//console.log("THE LETTER COUNT IS: " + letterCountLevelThree);

		console.log("The Word Count Is: " + levelThreeWordCountIndex)
		levelThreeWordCountIndex++;
		changeHighlightWordLevelThree(levelThreeWordCountIndex);	
	}
	
	else {

		$('#gameBoardSection').hide();
		$('#scrambledWordWrong').val(currentScrambleAnswer);
		$('.checkAnswer').show();
		$('#levelThreeCorrectAnswer').hide();
		$('#finalAnswer').hide();
		$('#levelThreeWrongAnswer').show();
		
		wrongAnswer.value = levelThreeEntry.value;		
	}	
};

		
$("#levelThreeEnter").click(function() { 
	console.log("ENTER WAS PRESSED");
 	checkLevelThreeAnswer();
 });
	


	
	
//Level III - Go On To Another Headline


//Level III - New
$("#levelThreeNew").click(function() {

	console.log("NEW WAS PRESSED");

	levelThreeEntry.value = "";
	letterCountLevelThree = 1;
	
	if(levelThreeWordCountIndex == levelThreeMasterHeadline.length ) {
		levelThreeWordCountIndex = 0;
		document.location.href='/storyscramble_level_III';
		console.log("NEW WAS CLICKED")
		}
	else {
		$('#gameBoardSection').show();	
		$('.checkAnswer').hide();
		$('#levelThreeCorrectAnswer').hide();
	}  
});


//Level III - Next
$("#levelThreeNext").click(function() { 

	console.log("NEXT WAS PPRESSED");

	letterCountLevelThree = 1;
	levelThreeEntry.value = "";
	
	if(levelThreeWordCountIndex == levelThreeMasterHeadline.length - 1 ) {
		levelThreeWordCountIndex = 0;
		document.location.href='/storyscramble_level_III';
		console.log("NEXT WAS CLICKED")
		}
	else {
		levelThreeWordCountIndex++;
		changeHighlightWordLevelThree(levelThreeWordCountIndex);
		$('#gameBoardSection').show();	
		$('.checkAnswer').hide();
		$('#levelThreeCorrectAnswer').hide();
	}	
});

//Level III - Skip
$("#levelThreeSkip").click(function() { 

	console.log("SKIP WAS PRESSED");

	letterCountLevelThree = 1;
	levelThreeEntry.value = "";

	if(levelThreeWordCountIndex == levelThreeMasterHeadline.length - 1 ) {
			levelThreeWordCountIndex = 0;
			document.location.href='/storyscramble_level_III';
			console.log("SKIP WAS CLICKED")
		}
	else {
		levelThreeWordCountIndex++;
		changeHighlightWordLevelThree(levelThreeWordCountIndex);
		$('#gameBoardSection').show();	
		$('.checkAnswer').hide();
		$('#levelThreeCorrectAnswer').hide();
	}
});


//Level III - Final Button
$("#levelThreeFinalButton").click(function() {

		levelThreeWordCountIndex = 0;
		document.location.href='/storyscramble_level_III';
		console.log("FINAL WAS CLICKED")
	
});


//Level III - Try Again
$("#levelThreeTryAgain").click(function() { 
  
  	$('#gameBoardSection').show();	
	$('.checkAnswer').hide();

	levelThreeEntry.value = wrongAnswer.value;
 
});



//******************************Read Story - AJAX Call******************************//

$('input#readStory').on('click', function(){

	console.log("got it");
	
	url = $('#finalHeadlineLink').attr('href');
	console.log(url);
	
	data = {};
	data['url'] = url;
	
	// perform ajax 
	$.ajax({
		url : '/ajaxgetarticle',
		data : data,
		dataType:'json',
		type : 'GET',
		
		success : function(data) {
			//console.log(data.text);
			
			$("#showStoryText").html(data.text);
			
			$("#showStory").show();
			$("#showStoryHeadline").show();
			$("#showStoryText").show();
			
			$('.checkAnswer').hide();
			$('#levelThreeCorrectAnswer').hide();
			
		},
		
		error : function(err) {
		
		}
	})
	
})


$('#linkToStory').click(function() {

	window.open($('#linkToStory').attr('title'));

});



//******************************Keyboard Enter Logic******************************//

var enterWasPressed = function() {

	if (onWordsLevelOne || onWordsLevelTwo || onWordsLevelThree || onLevelOne) {
		$('#levelOneEnter').trigger('click');
	}
	else if (onLevelTwo) {
		$('#levelTwoEnter').trigger('click');	
	}
	else if (onLevelThree) {
		$('#levelThreeEnter').trigger('click');	
	}	
};


$(document).keypress(function (e) {
  if (e.which == 13) {
    enterWasPressed();
	console.log ("Enter Was Pressed");
  }
});



//******************************TextBox Enter Logic******************************//
//Might only be supported in Chrome???
var textBox = document.getElementById('levelOneEntry');
var textEntered = document.getElementById('textEntered');
			
textBox.addEventListener('input', function(){

	var newText = textBox.value;
	
	console.log(newText);
	textEntered.innerHTML = newText;
	}, 
	false);		
		

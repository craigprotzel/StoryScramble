//**********Global**********//
var categoryChosen;
var topicChosen;
var levelChosen;

//Header Home Button
//Reset Local Vars
$("#homeButton").click(function() { 
	console.log("Topic Set: none");
	localStorage.setItem("categoryChosen", "");
	localStorage.setItem("topicChosen", "");
	localStorage.setItem("levelChosen", "");
  
  	document.location.href='/';
});


//Header Topic Button
$("#changeTopic").click(function() { 
  document.location.href='/topics';
});


//Welcome - Enter Button
$("#welcomeButton").click(function() { 

	localStorage.setItem("categoryChosen", "");
	localStorage.setItem("topicChosen", "");
	localStorage.setItem("levelChosen", "");
	
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
	localStorage.setItem("levelChosen", "Level I");
	document.location.href="/instructions_level_I";
});
$("#chooseLevelTwo").click(function() {
	localStorage.setItem("levelChosen", "Level II"); 
	document.location.href="/instructions_level_II";
});
$("#chooseLevelThree").click(function() {
	localStorage.setItem("levelChosen", "Level III"); 
	document.location.href="/instructions_level_III";
});


//Choose Topic
//Check to see if a level has already been chosen first
$("#news").click(function() { 
	console.log("Topic Set: News");
	localStorage.setItem("topicChosen", "News");
	
	if (categoryCurrent == "Words") {
	
		if (levelCurrent == "Level I") {
			document.location.href="/instructions_level_I";	
		}
		else if (levelCurrent == "Level II") {
			document.location.href="/instructions_level_II";	
		}
		else if (levelCurrent == "Level III") {
			document.location.href="/instructions_level_III";	
		}		
		else {
			document.location.href='/news';
		}
	}
	
	else if (categoryCurrent == "Headlines") {
	
		if (levelCurrent == "Level I") {
			document.location.href="/instructions_level_I";		
		}
		else if (levelCurrent == "Level II") {
			document.location.href="/instructions_level_II";		
		}
		else if (levelCurrent == "Level III") {
			document.location.href="/instructions_level_III";		
		}		
		else {
			document.location.href='/news';
		}
	}
	
	else {
		document.location.href='/categories';	
	}
});



$("#travel").click(function() { 
	console.log("Topic Set: Travel");
	localStorage.setItem("topicChosen", "Travel");
	
	if (categoryCurrent == "Words") {
	
		if (levelCurrent == "Level I") {
			document.location.href="/instructions_level_I";	
		}
		else if (levelCurrent == "Level II") {
			document.location.href="/instructions_level_II";	
		}
		else if (levelCurrent == "Level III") {
			document.location.href="/instructions_level_III";	
		}		
		else {
			document.location.href='/travel';
		}
	}
	
	else if (categoryCurrent == "Headlines") {
	
		if (levelCurrent == "Level I") {
			document.location.href="/instructions_level_I";		
		}
		else if (levelCurrent == "Level II") {
			document.location.href="/instructions_level_II";		
		}
		else if (levelCurrent == "Level III") {
			document.location.href="/instructions_level_III";		
		}		
		else {
			document.location.href='/travel';
		}
	}
	
	else {
		document.location.href='/categories';	
	}
});


$("#weather").click(function() { 
	console.log("Topic Set: Weather");
	localStorage.setItem("topicChosen", "Weather");
	
	if (categoryCurrent == "Words") {
	
		if (levelCurrent == "Level I") {
			document.location.href="/instructions_level_I";	
		}
		else if (levelCurrent == "Level II") {
			document.location.href="/instructions_level_II";	
		}
		else if (levelCurrent == "Level III") {
			document.location.href="/instructions_level_III";	
		}		
		else {
			document.location.href='/weather';
		}
	}
	
	else if (categoryCurrent == "Headlines") {
	
		if (levelCurrent == "Level I") {
			document.location.href="/instructions_level_I";		
		}
		else if (levelCurrent == "Level II") {
			document.location.href="/instructions_level_II";		
		}
		else if (levelCurrent == "Level III") {
			document.location.href="/instructions_level_III";		
		}		
		else {
			document.location.href='/weather';
		}
	}
	
	else {
		document.location.href='/categories';	
	}

});	




$("#helpButton").click(function() {
	console.log("Help is pressed"); 
	
	$('.gameBoard').hide();
	$('#helpInstructions').show();
	
	$('#showStoryContainer').hide();
	$("#showStory").hide();
	$("#showStoryHeadline").hide();
	$("#showStoryText").hide();
	
	$('.checkAnswer').hide();
	
});



//Change Topic
$("#changeTopic").click(function() { 

	//console.log("Topic Set: ");
	localStorage.setItem("topicChosen", "");

	if (categoryCurrent == ""){
		document.location.href='/categories';
	}
	else {
	document.location.href='/topics';
	}
});


//Change Level
$('#changeLevel').click(function() {
	//console.log("Change Level Pressed");
	localStorage.setItem("levelChosen", "");
	
	console.log(topicCurrent);
	
	if (categoryCurrent == ""){
		document.location.href='/categories';
	}
	else if (topicCurrent == "News") {
		document.location.href='/news';
	}
	else if (topicCurrent == "Travel") {
		document.location.href='/travel';
	}
	else if (topicCurrent == "Weather"){
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
		
		$("#showStoryContainer").hide();
		$("#showStory").hide();
		$("#showStoryHeadline").hide();
		$("#showStoryDate").hide();
		$("#showImage").hide();
		$("#showStoryText").hide();
		$("#showStoryLink").hide();		
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
		$('#articleLoadingText').hide();
		$('#articleLoadingGif').hide();
		
		$("#showStoryContainer").hide();
		$("#showStory").hide();
		$("#showStoryHeadline").hide();
		$("#showStoryText").hide();
		$("#showStoryLink").hide();
		
		
		$('.gameBoard').show();
		$('#helpInstructions').hide();		
	}
});



//Make Cursor Live In Text Field
$("input:text:visible:first").focus();



//Clue Button 
$("#clueButton").click(function() { 
	//console.log("Clue was pressed");	
	$('.clue').toggle();
});


//Page Titles
var pageTitle = document.getElementById('pageTitle');
var currentPageTitle = document.getElementById('currentPageTitle');
console.log(currentPageTitle);


//Get Local Variables
var categoryCurrent = localStorage.getItem("categoryChosen");
var topicCurrent = localStorage.getItem("topicChosen");
var levelCurrent = localStorage.getItem("levelChosen");

var titleFiller = currentPageTitle.innerHTML;

//Remove topic choice if on home page
var homeTitle = "Story Scramble";
if (titleFiller == homeTitle){
	topicCurrent = "";
}

pageTitle.innerHTML = topicCurrent + " " + titleFiller;

//console.log("Title Filler is: " + titleFiller);
//console.log("PageTitle.innerHTML is: " + pageTitle.innerHTML);


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

var levelOneTitle = "Level One - Headlines";
var levelTwoTitle = "Level Two - Headlines";
var levelThreeTitle = "Level Three - Headlines";

if (titleFiller == wordsLevelOneTitle){
	
	onWordsLevelOne = true;
	onWordsLevelTwo = false;
	onWordsLevelThree = false;
	
	onLevelOne = false;
	onLevelTwo = false;
	onLevelThree = false;
	
	//console.log("We're On Words Level One");
}

else if (titleFiller == wordsLevelTwoTitle){
	
	onWordsLevelOne = false;
	onWordsLevelTwo = true;
	onWordsLevelThree = false;
	
	onLevelOne = false;
	onLevelTwo = false;
	onLevelThree = false;
	
	//console.log("We're On Words Level Two");
}

else if (titleFiller == wordsLevelThreeTitle){
	
	onWordsLevelOne = false;
	onWordsLevelTwo = false;
	onWordsLevelThree = true;
	
	onLevelOne = false;
	onLevelTwo = false;
	onLevelThree = false;
	
	//console.log("We're On Words Level Three");
}

else if (titleFiller == levelOneTitle){

	onWordsLevelOne = false;
	onWordsLevelTwo = false;
	onWordsLevelThree = false;

	onLevelOne = true;
	onLevelTwo = false;
	onLevelThree = false;
	
	//console.log("We're On Headlines Level One");
}
else if (titleFiller == levelTwoTitle) {

	onWordsLevelOne = false;
	onWordsLevelTwo = false;
	onWordsLevelThree = false;

	onLevelOne = false;
	onLevelTwo = true;
	onLevelThree = false;
	
	//console.log("We're On Headlines Level Two");
}
else if (titleFiller == levelThreeTitle) {

	onWordsLevelOne = false;
	onWordsLevelTwo = false;
	onWordsLevelThree = false;

	onLevelOne = false;
	onLevelTwo = false;
	onLevelThree = true;
	
	//console.log("We're On Headlines Level Three");
}

else {

	onWordsLevelOne = false;
	onWordsLevelTwo = false;
	onWordsLevelThree = false;

	onLevelOne = false;
	onLevelTwo = false;
	onLevelThree = false;

	//console.log("Not playing yet");
}


//Enter - Entry - Answer Variables

//input box letters for all levels
var letterEntry = document.getElementById('letterEntry');

var levelOneEnter = document.getElementById('levelOneEnter'); 

var levelTwoEnter = document.getElementById('levelTwoEnter'); 

var levelThreeEnter = document.getElementById('levelThreeEnter'); 
//var levelThreeEntry = document.getElementById('levelThreeEntry');

var wrongAnswer = document.getElementById('wrongAnswer');


//inner HTML variables
if (onLevelTwo) {
	var levelTwoMasterHeadline = (document.getElementById('levelTwoHeadline').innerHTML).split(" ");
	var levelTwoWordCountIndex = (document.getElementById('levelTwoWordCountIndex').innerHTML).split(",");
	//console.log("TLTWC 0 is: " + levelTwoWordCountIndex[0]);
	//console.log("TLTWC 1 is: " + levelTwoWordCountIndex[1]);
	var levelTwoIndex = document.getElementById('levelTwoIndex').innerHTML;
}
else if (onLevelThree){
	//inner HTML variables
	var levelThreeMasterHeadline = (document.getElementById('levelThreeHeadline').innerHTML).split(" ");
	var levelThreeWordCountIndex = document.getElementById('levelThreeWordCountIndex').innerHTML;
	//console.log("TLTWC is: " + levelThreeWordCountIndex)
}




//Set Indicators
//Current Category
if (categoryCurrent == "Words" || categoryCurrent == "Headlines"){
	$('#categoryChosen').html(categoryCurrent);
}
else {
	$('#categoryChosen').html("");
}


if (categoryCurrent !== ""){
	$('.categoryChosenStyle').show();
}
else {
	$('.categoryChosenStyle').hide();
}


//Current Topic
if (topicCurrent == "News" || topicCurrent == "Weather" || topicCurrent == "Travel"){
	$('#topicChosen').html(topicCurrent);
} 
else {
	$('#topicChosen').html("");
} 


//Current Level
if (levelCurrent == "Level I" || levelCurrent == "Level II" || levelCurrent == "Level III") {
	$('#levelChosen').html(levelCurrent);	
}
else {
	$('#levelChosen').html("");
} 


if (topicCurrent !== "" && levelCurrent !== ""){
	$('#topicChosen').show();
	$('#levelChosen').show();	
}
else if (topicCurrent !== "" && levelCurrent == ""){
	$('#topicChosen').show();
	$('#levelChosen').hide();
}
else {
	$('#topicChosen').hide();
	$('#levelChosen').hide();
}



//******************************Level I******************************//


//Level I - Give Me A Letter Logic

var letterCountLevelOne = 1;

var levelOneAnswer = document.getElementById('levelOneAnswer');

var letterCounterLevelOne = function(){

	var stringOfLettersOne = levelOneAnswer.innerHTML;
	 
	//var levelOneEntry = document.getElementById('levelOneEntry');
	//levelOneEntry.value = ""; 
	letterEntry.value = "";
	
	
	if (letterCountLevelOne <= stringOfLettersOne.length) {
		for (var i = 0; i < letterCountLevelOne; i++){
			//levelOneEntry.value = levelOneEntry.value + stringOfLettersOne[i]
			letterEntry.value = letterEntry.value + stringOfLettersOne[i]
		}
	}
	else if (letterCountLevelOne > stringOfLettersOne.length){
		//levelOneEntry.value = levelOneAnswer.innerHTML; 
		letterEntry.value = levelOneAnswer.innerHTML;
		$('#levelOneEnter').trigger('click');
		
	}		
	letterCountLevelOne++;
} 


$("#giveMeButtonLevelOne").click(function() { 
 	letterCounterLevelOne();
 	letterKnockOut();
 	//$('#letterEntry').trigger('change');
 	
 });



//Level I - Check Answer Logic
						 
var checkLevelOneAnswer = function(){
	
	//this cleans it up for spaces
	//var levelOneEnteredAnswer = levelOneEntry.value.trim();
	var levelOneEnteredAnswer = letterEntry.value.trim();
	
	
	
	if (levelOneEnteredAnswer == levelOneAnswer.innerHTML) {
		
		if (onWordsLevelOne) {
			finishedWordsLevelOne = true;
			//console.log("Finished Level One - Words!");
			}
		else if (onWordsLevelTwo) {
			finishedWordsLevelTwo = true;
			//console.log("Finished Level Two - Words!");
		}
		else if (onWordsLevelThree) {
			finishedWordsLevelThree = true;
			//console.log("Finished Level Three - Words!");
		}
		else if (onLevelOne) {
			finishedLevelOne = true;
			//console.log("Finished Level One - Headlines!");
		}
		
		$('#gameBoardSection').hide();
				
		$('.checkAnswer').show();
		$('#levelOneCorrectAnswer').show();
		$('#levelOneWrongAnswer').hide();
	
	}
	
	else {
		
		$('#gameBoardSection').hide();

		$('.checkAnswer').show();
		$('#levelOneCorrectAnswer').hide();
		$('#levelOneWrongAnswer').show();		
		//wrongAnswer.value = levelOneEntry.value;
		wrongAnswer.value = letterEntry.value;
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

	//levelOneEntry.value = wrongAnswer.value;
	letterEntry.value = wrongAnswer.value;
	letterEntry.value = "";
	letterCountLevelOne = 1;
	letterKnockOut();  
});





//******************************Level II******************************//


//Level II - Give Me A Letter Logic
var letterCountLevelTwo = 1;

var letterCounterLevelTwo = function(){
	
	var levelTwoAnswer = levelTwoMasterHeadline[levelTwoWordCountIndex[levelTwoIndex]];
	//console.log(levelTwoAnswer);
	//console.log("The Level 2 Index Value is: " + levelTwoIndex);
	//console.log("The Current Answer is: " + levelTwoAnswer);
	var levelTwoChars = levelTwoAnswer.split(""); 
		
	letterEntry.value = ""; 

	
	if (letterCountLevelTwo <= levelTwoChars.length) {
		for (var i = 0; i < letterCountLevelTwo; i++){
			letterEntry.value = letterEntry.value + levelTwoChars[i]
		}
		//console.log(letterCountLevelTwo);
	}
	else if (letterCountLevelTwo > levelTwoChars.length){
		letterEntry.value = levelTwoAnswer;
		letterCountLevelTwo = 1;
		//console.log (letterCountLevelTwo); 
		$('#levelTwoEnter').trigger('click');	
	}		
	letterCountLevelTwo++;
} 


$("#giveMeButtonLevelTwo").click(function() { 
 	letterCounterLevelTwo();
 	letterKnockOut();
 });



//Level II check answer	

var changeHighlightWordLevelTwo = function(idx){
	
	$('.letters').removeClass('highlightedLetter')
	$('.letters').removeClass('usedLetter')
	$('.word').removeClass('letters')
	$('.word').removeClass('highlightedWordTwo')
	$('.highlightedWordOne').addClass('hidden')
	$('.highlightedWordOneCorrect').removeClass('hidden')
	
	$('.levelTwoWords').each(function(index) {
   		if (levelTwoWordCountIndex[idx] == index){
   			//need to access a child node of this
   			$(this).children('.word').addClass('letters')
   			$(this).children('.word').addClass('highlightedLetter') 
 
   		}
   });	
}

											
var checkLevelTwoAnswer = function(){
	//console.log("Level 2 Answer Submitted");
	//console.log("You Entered: " + letterEntry.value);
	//console.log("The Correct Answer is: " + levelTwoMasterHeadline[levelTwoWordCountIndex[levelTwoIndex]]);
	var currentScrambleAnswer = "";
	
	$('.scrambledWordItem').each(function(index) {
   		if (levelTwoIndex == index){
   			currentScrambleAnswer = $(this).html()
   			//console.log("Current Scramble Answer = " + currentScrambleAnswer)
   		}
   		
   });
	
	//this cleans it up for spaces
	var levelTwoEnteredAnswer = letterEntry.value.trim();
	
	if (levelTwoEnteredAnswer == levelTwoMasterHeadline[levelTwoWordCountIndex[levelTwoIndex]]) {
				
		$('#gameBoardSection').hide();
			
		$('#scrambledWordCorrect').val(currentScrambleAnswer);
		$('#correctAnswer').val(levelTwoMasterHeadline[levelTwoWordCountIndex[levelTwoIndex]]);
		
		levelTwoIndex++;
		
		//console.log("Level Two index Is Now: " + levelTwoIndex)
		
		
		
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
		
		//console.log("Level Two index Is: " + levelTwoIndex)
		
		wrongAnswer.value = letterEntry.value;		
	}	
};

		
$("#levelTwoEnter").click(function() { 
	//console.log("ENTER WAS PRESSED");
 	checkLevelTwoAnswer();
 });
	

//Level II - Next
$("#levelTwoNext").click(function() {

	letterEntry.value = "";
	letterCountLevelTwo = 1;
	
	if(levelTwoIndex == 2) {
		levelTwoIndex = 0;
		document.location.href='/storyscramble_level_II';
		//console.log("NEW WAS CLICKED")
		}
	else {
		$('#gameBoardSection').show();	
		$('.checkAnswer').hide();
		$('#levelTwoCorrectAnswer').hide();
		
	}  
	letterKnockOut();
});


//Level II - Final Button
$("#levelTwoFinalButton").click(function() {

		levelTwoIndex = 0;
		letterKnockOut();
		document.location.href='/storyscramble_level_II';
		//console.log("FINAL WAS CLICKED")
	
});


//Level II - Try Again
$("#levelTwoTryAgain").click(function() { 
  
  	$('#gameBoardSection').show();	
	$('.checkAnswer').hide();
	

	letterEntry.value = "";
	letterCountLevelTwo = 1;
	letterKnockOut();
 
});




//******************************Level III******************************//


//Level III - Give Me A Letter Logic

var letterCountLevelThree = 1;

var letterCounterLevelThree = function(){
	
	var levelThreeAnswer = levelThreeMasterHeadline[levelThreeWordCountIndex];
	var levelThreeChars = levelThreeAnswer.split(""); 
	
	//var levelThreeEntry = document.getElementById('levelThreeEntry');
	//levelThreeEntry.value = "";
	
	letterEntry.value = ""; 
	
	if (letterCountLevelThree <= levelThreeChars.length) {
		for (var i = 0; i < letterCountLevelThree; i++){
			letterEntry.value = letterEntry.value + levelThreeChars[i]
		}
		//console.log(letterCountLevelThree);
	}
	else if (letterCountLevelThree > levelThreeChars.length){
		letterEntry.value = levelThreeAnswer;
		letterCountLevelThree = 1;
		//console.log (letterCountLevelThree); 
		$('#levelThreeEnter').trigger('click');
		
	}		
	letterCountLevelThree++;
} 


$("#giveMeButtonLevelThree").click(function() { 
	//console.log("GIVE ME BUTTON WAS PRESSED");
 	letterCounterLevelThree();
 	letterKnockOut();
 	
 });



//Level III check answer


var levelThreeLetterMaker = function(){
	var funElement = $('.highlightedWord');
	var funSplit = $(funElement).html().split("");
	$(funElement).html('');
	//console.log(funSplit);
	for(var i = 0; i < funSplit.length; i++){
		$(funElement).append('<span class="letters highlightedLetter">'+funSplit[i]+'</span>');
	}
}				


$(document).ready(function(){
	if (onLevelThree)
		levelThreeLetterMaker();
});


var changeHighlightWordLevelThree = function(idx){

	$('.highlightedWord').html(levelThreeMasterHeadline[idx-1]);
	$('.highlightedWord').addClass('levelThreeWordSpace');
	$('.word').removeClass('highlightedWord')
	
	$('.word').each(function(index) {
   		if (idx == index){
   			$(this).addClass('highlightedWord')
   		}
   });				
}

											
var checkLevelThreeAnswer = function(){
	//console.log("Level 3 Answer Submitted");
	//console.log("You Entered: " + letterEntry.value);
	//console.log("The Correct Answer is: " + levelThreeMasterHeadline[levelThreeWordCountIndex]);
	var currentScrambleAnswer = "";
	
	$('.scrambledWordItem').each(function(index) {
   		if (levelThreeWordCountIndex == index){
   			currentScrambleAnswer = $(this).html()
   		}
   });
	
	
	//this cleans it up for spaces
	var levelThreeEnteredAnswer = letterEntry.value.trim();
	
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

		//console.log("The Word Count Is: " + levelThreeWordCountIndex)
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
		
		wrongAnswer.value = letterEntry.value;		
	}	
};

		
$("#levelThreeEnter").click(function() { 
	//console.log("ENTER WAS PRESSED");
 	checkLevelThreeAnswer();

 });
	
	

//Level III - New
$("#levelThreeNew").click(function() {

	//console.log("NEW WAS PRESSED");

	letterEntry.value = "";
	letterCountLevelThree = 1;
	
	if(levelThreeWordCountIndex == levelThreeMasterHeadline.length ) {
		levelThreeWordCountIndex = 0;
		document.location.href='/storyscramble_level_III';
		//console.log("NEW WAS CLICKED")
		}
	else {
		$('#gameBoardSection').show();	
		$('.checkAnswer').hide();
		$('#levelThreeCorrectAnswer').hide();
		levelThreeLetterMaker();
	}  
});



//Level III - Final Button
$("#levelThreeFinalButton").click(function() {

		levelThreeWordCountIndex = 0;
		document.location.href='/storyscramble_level_III';
		//console.log("FINAL WAS CLICKED")
		letterKnockOut();
	
});


//Level III - Try Again
$("#levelThreeTryAgain").click(function() { 
  
  	$('#gameBoardSection').show();	
	$('.checkAnswer').hide();

	letterEntry.value = "";
	letterCountLevelThree = 1;
	letterKnockOut();
 
});




//******************************Read Story - AJAX Call******************************//

$('input#readStory').on('click', function(){

	$('.checkAnswer').hide();
	
	$('#articleLoadingText').html('One Moment Please...');
	$('#articleLoadingText').show();			

	$('#articleLoadingGif').html('<img src="media/gifs/ajax-loader.gif"/>'); 
	$('#articleLoadingGif').show();
	
	//console.log("Article Request Made");
	
	url = $('#finalHeadlineLink').attr('href');
	//console.log(url);
	
	data = {};
	data['url'] = url;
	
	// perform ajax 
	$.ajax({
		url : '/ajaxgetarticle',
		data : data,
		dataType:'json',
		type : 'GET',
		
		success : function(data) {
			
			$('#articleLoadingText').hide();
			$('#articleLoadingText').html("");
			
			$('#articleLoadingGif').hide();
			$('#articleLoadingGif').html("");
			
			$("#showStoryText").html(data.text);
			
			$("#showStoryContainer").show();		
			$("#showStory").show();	
			$("#showStoryHeadline").show();
			$("#showStoryLink").show();
			$("#showStoryDate").show();
			
			//check for image
			var imageLink;

			if (data.media != undefined && data.media != "null") {
				for (var i = 0; i < data.media.length; i++) {
					if (data.media[i].type == "image" && data.media[i].primary == "true") {
						imageLink = data.media[i].link
					}
					//console.log(data.media[i].link);
				}	
				$("#showImage").html('<image src="'+imageLink+'" style="maxWidth:680px"/>');
				$("#showImage").show();
			}		
						
			$("#showStoryText").show();
			
					
			
		},
			
		error : function(err) {
		
		}
	})
	
})


/*
$('#linkToStory').click(function() {
	window.open($('#linkToStory').attr('title'));
});
*/



//******************************Keyboard Enter Logic******************************//


var enterWasPressed = function() {
	$('.enterButton').trigger('click');
	$('#letterEntry').blur();	
};



$(document).keypress(function (e) {
  if (e.which == 13) {
    enterWasPressed();
	//console.log ("Enter Was Pressed");
  }
});



//******************************TextBox Enter Logic******************************//


//Not sure if I should use "bind" or "addEventListener"
//Might only be supported in Chrome???

var textBox = document.getElementById('letterEntry');
var textEntered = document.getElementById('textEntered');

//var correctLetters = (document.getElementById('levelOneLetters').innerHTML).split(",");


$(function() {
	$("#letterEntry").bind('input', function() {
		letterKnockOut();
	});
});


var letterKnockOut = function(){
	var letters = $(".letters");
		letters.addClass("highlightedLetter"); 
		letters.removeClass("usedLetter");
		
		var enteredLettersArray = textBox.value.split("");
		
		for (var i = 0; i < enteredLettersArray.length; i++){
			var letterFound = false;
			letters.each(function(){ 
				if (enteredLettersArray[i] == $(this).text() && !$(this).hasClass("usedLetter"))
				{
					if(!letterFound){
						$(this).removeClass("highlightedLetter");
						$(this).addClass("usedLetter");
						letterFound = true;	
					}
				}					
			});
		}
}
		
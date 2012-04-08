//**********Global**********//


//Header Home Button
$("#homeButton").click(function() { 
  document.location.href='/';
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

var currentTopic;

var choseNews = 0;
var choseTravel = 0;
var choseWeather = 0;

var changeNews = function (){
	choseNews = 1;
	choseTravel = 0;
	choseWeather = 0
};

var changeTravel = function (){
	choseNews = 0;
	choseTravel = 1;
	choseWeather = 0;
};

var changeWeather = function (){
	choseNews = 0;
	choseTravel = 0;
	choseWeather = 1;
};

$("#news").click(function() { 
	
	changeNews();	
	document.location.href='/news';
	currentTopic = 'news';
	console.log("You chose NEWS");
	
});

$("#travel").click(function() { 
	
	changeTravel();
	document.location.href='/travel';
	currentTopic = 'travel';
	console.log("You chose TRAVEL");
});

$("#weather").click(function() { 

	changeWeather();
	document.location.href='/weather';
	currentTopic = 'weather';
	console.log("You chose WEATHER");
});	


$("#helpButton").click(function() {
	console.log("Help is pressed"); 
	$('.gameBoard').hide();
	$('#helpChoices').show();
	$('#helpInstructions').hide();
	$('.checkAnswer').hide();
	console.log("You are on Topic: " + currentTopic);
	console.log ("Chose News = " + choseNews);
	console.log ("Chose Travel = " + choseTravel);
	console.log ("Chose Weather = " + choseWeather);
	
});


//Help - Change Topic
$("#changeTopic").click(function() { 
	document.location.href='/';
});



$('#changeLevel').click(function() {
	console.log("Change Level Pressed");
	if (choseNews == 1) {
		document.location.href='/news';	
	} 
	else if (choseTravel == 1) {
		document.location.href='/travel';
	}
	else if (choseWeather == 1) {
		document.location.href='/weather';
	}
	
});


//Help - Back to the Game
$("#backToTheGame").click(function() { 
	$('.gameBoard').show();
	$('#helpChoices').hide();	
});

//Help - Instructions
$("#reviewInstructions").click(function() { 
	$('.gameBoard').hide();
	$('#helpChoices').hide();
	$('#helpInstructions').show();
	
});

//Help - Instructions - Back to the Game
$("#backToTheGameInstructions").click(function() { 
	$('.gameBoard').show();
	$('#helpInstructions').hide();	
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

var titleFiller = currentPageTitle.innerHTML;
pageTitle.innerHTML = titleFiller;

console.log("Title Filler is: " + titleFiller);
console.log("PageTitle.innerHTML is: " + pageTitle.innerHTML);


//Page Booleans
var onLevelOne = false;
var onLevelTwo = false;
var onLevelThree = false;

var levelOneTitle = "Level One";
var levelTwoTitle = "Level Two";
var levelThreeTitle = "Level Three";

if (titleFiller == levelOneTitle){
	onLevelOne = true;
	onLevelTwo = false;
	onLevelThree = false;
	console.log("We're On Level One!!!");
}
else if (titleFiller == levelTwoTitle) {
	onLevelOne = false;
	onLevelTwo = true;
	onLevelThree = false;
	console.log("We're On Level Two!!!");
}
else if (titleFiller == levelThreeTitle) {
	onLevelOne = false;
	onLevelTwo = false;
	onLevelThree = true;
	console.log("We're On Level Three!!!");
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
	
	if (levelOneEntry.value == levelOneAnswer.innerHTML) {

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



//Level I - Go On To Another Headline

$("#levelOneNew").click(function() { 
  document.location.href='/storyscramble_level_I';
});
$("#levelOneNext").click(function() { 
  document.location.href='/storyscramble_level_I';
});
$("#levelOneSkip").click(function() { 
  document.location.href='/storyscramble_level_I';
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
	
	
	if (levelTwoEntry.value == levelTwoMasterHeadline[levelTwoWordCountIndex[levelTwoIndex]]) {
				
		$('#gameBoardSection').hide();
			
		$('#scrambledWordCorrect').val(currentScrambleAnswer);
		$('#correctAnswer').val(levelTwoMasterHeadline[levelTwoWordCountIndex[levelTwoIndex]]);
		console.log("Level Two index Is: " + levelTwoIndex)
		
		levelTwoIndex++;
		
		if (levelTwoIndex == 2) {
			//$('#correctText').html("Great Job!!!");
			//$('#levelTwoNew').val("NEXT HEADLINE");
			
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
	
	
	if (levelThreeEntry.value == levelThreeMasterHeadline[levelThreeWordCountIndex]) {
				
		$('#gameBoardSection').hide();
			
		$('#scrambledWordCorrect').val(currentScrambleAnswer);
		$('#correctAnswer').val(levelThreeMasterHeadline[levelThreeWordCountIndex]);
		
		if (levelThreeWordCountIndex == levelThreeMasterHeadline.length - 1) {
			
			//$('#correctText').html("Great Job!!!");
			//$('#levelThreeNew').val("NEXT HEADLINE");
			
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






//"Enter" Keypress Functionality
//Not working right now
/*
$(document).keypress(function(e) {
    if(e.keyCode == 13) {
    
    console.log("Enter was pressed");
    
    //if (window.location.href = '/storyscramble_level_I'){
    //Level I
		if (levelOneEntry.value == levelOneAnswer.innerHTML) {
			
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
			
			wrongAnswer.value = levelOneEntry.value;	
			
			}	
		//}        
*/	
	//else if (window.location.href = '/storyscramble_level_II'){
	//Level II
	/*
		if (levelTwoEntry.value == levelTwoAnswer.innerHTML) {
		
			$('#gameBoardSection').hide();
			
			$('.checkAnswer').show();
			$('#levelTwoCorrectAnswer').show();
			$('#levelTwoWrongAnswer').hide();		
			
			}
			
		else {
			
			$('#gameBoardSection').hide();
			
			$('.checkAnswer').show();
			$('#levelTwoCorrectAnswer').hide();
			$('#levelTwoWrongAnswer').show();	
			
			//wrongAnswer.value = levelOneEntry.value;	
			
			}	
		//} */        
/*	}
		
});
*/ 
		

//**********Global**********//


//Header Home Button
$("#homeButton").click(function() { 
  document.location.href='/';
});


//Header Help Button
$("#helpButton").click(function() {
	console.log("Help is pressed"); 
	$('.gameBoard').hide();
	$('#helpChoices').show();
	$('#helpInstructions').hide();
});

$("#changeLevel").click(function() { 
	document.location.href='/';
});

$("#backToTheGame").click(function() { 
	$('.gameBoard').show();
	$('#helpChoices').hide();	
});


$("#reviewInstructions").click(function() { 
	$('.gameBoard').hide();
	$('#helpChoices').hide();
	$('#helpInstructions').show();
	
});

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




//**********Level I**********//


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
	
var levelOneEnter = document.getElementById('levelOneEnter'); 
var levelOneEntry = document.getElementById('levelOneEntry');
var levelOneAnswer = document.getElementById('levelOneAnswer');

/* soundCorrect = document.getElementById('soundCorrect_01');  */
		
var wrongAnswer = document.getElementById('wrongAnswer');		
						 
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




//**********Level II**********//


//Level II - Give Me A Letter Logic

var letterCountLevelTwo = 1;

var letterCounterLevelTwo = function(){
	
	var levelTwoAnswer = levelTwoMasterHeadline[levelTwoWordCountIndex];
	var levelTwoChars = levelTwoAnswer.split(""); 
	
	var levelTwoEntry = document.getElementById('levelTwoEntry');
	levelTwoEntry.value = ""; 
	
	if (letterCountLevelTwo <= levelTwoChars.length) {
		for (i = 0; i < letterCountLevelTwo; i++){
			levelTwoEntry.value = levelTwoEntry.value + levelTwoChars[i]
		}
		console.log (letterCountLevelTwo);
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


var levelTwoEnter = document.getElementById('levelTwoEnter'); 
var levelTwoEntry = document.getElementById('levelTwoEntry');

var levelTwoMasterHeadline = (document.getElementById('levelTwoHeadline').innerHTML).split(" ");
var levelTwoWordCountIndex = document.getElementById('levelTwoWordCountIndex').innerHTML;

var levelTwoScrambledWords = document.getElementById('levelTwoScrambledWords');


var changeHighlightWord = function(idx){

	$('.highlightedWord').html(levelTwoMasterHeadline[idx-1]);
	$('.word').removeClass('highlightedWord')
	
	$('.word').each(function(index) {
   		if (idx == index){
   			$(this).addClass('highlightedWord')
   		}
   });				
}

											
var checkLevelTwoAnswer = function(){
	console.log("Level 2 Answer Submitted");
	console.log("You Entered: " + levelTwoEntry.value);
	console.log("The Correct Answer is: " + levelTwoMasterHeadline[levelTwoWordCountIndex]);
	var currentScrambleAnswer = "";
	
	$('.scrambledWordItem').each(function(index) {
   		if (levelTwoWordCountIndex == index){
   			currentScrambleAnswer = $(this).html()
   		}
   });
	
	
	if (levelTwoEntry.value == levelTwoMasterHeadline[levelTwoWordCountIndex]) {
				
		$('#gameBoardSection').hide();
			
		$('#scrambledWordCorrect').val(currentScrambleAnswer);
		$('#correctAnswer').val(levelTwoMasterHeadline[levelTwoWordCountIndex]);
		
		if (levelTwoWordCountIndex == levelTwoMasterHeadline.length - 1) {
			$('#correctText').html("Great Job!!!");
			console.log("LAST WORD!!!");	
			}
		else {
			$('#correctText').html("Correct!!!");
		}
		
		$('.checkAnswer').show();
		$('#levelTwoCorrectAnswer').show();
		$('#levelTwoWrongAnswer').hide();
		
		letterCountLevelTwo = 1;
		//console.log("THE LETTER COUNT IS: " + letterCountLevelTwo);

		console.log("The Word Count Is: " + levelTwoWordCountIndex)
		levelTwoWordCountIndex++;
		changeHighlightWord(levelTwoWordCountIndex);	
	}
	
	else {

		$('#gameBoardSection').hide();
		$('#scrambledWordWrong').val(currentScrambleAnswer);
		$('.checkAnswer').show();
		$('#levelTwoCorrectAnswer').hide();
		$('#levelTwoWrongAnswer').show();
		
		wrongAnswer.value = levelTwoEntry.value;		
	}	
};

		
$("#levelTwoEnter").click(function() { 
 	checkLevelTwoAnswer();
 });
	


	
	
//Level II - Go On To Another Headline


$("#levelTwoNew").click(function() {

	levelTwoEntry.value = "";
	letterCountLevelTwo = 1;
	
	if(levelTwoWordCountIndex == levelTwoMasterHeadline.length ) {
		levelTwoWordCountIndex = 0;
		document.location.href='/storyscramble_level_II';
		console.log("NEW WAS CLICKED")
		}
	else {
		$('#gameBoardSection').show();	
		$('.checkAnswer').hide();
		$('#levelTwoCorrectAnswer').hide();
	}  
});


$("#levelTwoNext").click(function() { 

	letterCountLevelTwo = 1;
	levelTwoEntry.value = "";
	
	if(levelTwoWordCountIndex == levelTwoMasterHeadline.length - 1 ) {
		levelTwoWordCountIndex = 0;
		document.location.href='/storyscramble_level_II';
		console.log("NEXT WAS CLICKED")
		}
	else {
		levelTwoWordCountIndex++;
		changeHighlightWord(levelTwoWordCountIndex);
		$('#gameBoardSection').show();	
		$('.checkAnswer').hide();
		$('#levelTwoCorrectAnswer').hide();
	}	
});


$("#levelTwoSkip").click(function() { 

	letterCountLevelTwo = 1;
	levelTwoEntry.value = "";

	if(levelTwoWordCountIndex == levelTwoMasterHeadline.length - 1 ) {
			levelTwoWordCountIndex = 0;
			document.location.href='/storyscramble_level_II';
			console.log("SKIP WAS CLICKED")
		}
	else {
		levelTwoWordCountIndex++;
		changeHighlightWord(levelTwoWordCountIndex);
		$('#gameBoardSection').show();	
		$('.checkAnswer').hide();
		$('#levelTwoCorrectAnswer').hide();
	}
});


//Level II - Try Again
$("#levelTwoTryAgain").click(function() { 
  
  	$('#gameBoardSection').show();	
	$('.checkAnswer').hide();

	levelTwoEntry.value = wrongAnswer.value;
 
});






//"Enter" Keypress Functionality
//Not working right now
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
	}
		
});
   
		

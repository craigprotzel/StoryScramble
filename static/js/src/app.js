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
	
	var levelTwoAnswer = document.getElementById('levelTwoAnswer');
	var stringOfLettersTwo = levelTwoAnswer.innerHTML;
	
	var levelTwoEntry = document.getElementById('levelTwoEntry');
	levelTwoEntry.value = ""; 
	
	if (letterCountLevelTwo <= stringOfLettersTwo.length) {
		for (i = 0; i < letterCountLevelTwo; i++){
			levelTwoEntry.value = levelTwoEntry.value + stringOfLettersTwo[i]
		}
	}
	else if (letterCountLevelTwo > stringOfLettersTwo.length){
		levelTwoEntry.value = levelTwoAnswer.innerHTML; 
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
var levelTwoAnswer = document.getElementById('levelTwoAnswer');

//var levelTwoWordCountIndex = document.getElementById('levelTwoWordCountIndex').innerHTML;
											
var checkLevelTwoAnswer = function(){
	console.log("Level 2 Answer Submitted");
	console.log("You Entered: " + levelTwoEntry.value);
	console.log("The Correct Answer is: " + levelTwoAnswer.innerHTML);
	
	if (levelTwoEntry.value == levelTwoAnswer.innerHTML) {
				
		$('#gameBoardSection').hide();
		
		$('.checkAnswer').show();
		$('#levelTwoCorrectAnswer').show();
		$('#levelTwoWrongAnswer').hide();
		levelTwoWordCountIndex++;
			
		}
	
	else {

		$('#gameBoardSection').hide();

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
	
	console.log("Word Count = " + levelTwoWordCountIndex)
	
	$('#gameBoardSection').show();	
	$('.checkAnswer').hide();
	$('#levelTwoCorrectAnswer').hide();
	
	
 
  /* document.location.href='/storyscramble_level_II'; */
  
});

$("#levelTwoNext").click(function() { 

	$('#gameBoardSection').show();	
	$('.checkAnswer').hide();
	$('#levelTwoCorrectAnswer').hide();
	
	levelTwoEntry.value = "";

/*   document.location.href='/storyscramble_level_II'; */
});

$("#levelTwoSkip").click(function() { 

  	document.location.href='/storyscramble_level_II';

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
   
		

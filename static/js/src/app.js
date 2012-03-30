//**********Global**********//

$("#homeButton").click(function() { 
  document.location.href='/';
});



$("#levelTwoNext").click(function() { 
  document.location.href='/storyscramble_level_II';
});

$("input:text:visible:first").focus();


//**********Page Titles**********//

var pageTitle = document.getElementById('pageTitle');
var currentPageTitle = document.getElementById('currentPageTitle');
console.log(currentPageTitle);

var titleFiller = currentPageTitle.innerHTML;
pageTitle.innerHTML = titleFiller;



//**********Lower Game Buttons**********//



//Level I - Clue Button 


$("#clueButton").click(function() { 
	console.log("Clue was pressed");	
	$('.clue').toggle();
});


//Level I - Give Me A Letter Logic

var letterCount = 1;

  
function letterCounter() {
	
	var levelOneAnswer = document.getElementById('levelOneAnswer');
	var stringOfLetters = levelOneAnswer.innerHTML;
	
	var levelOneEntry = document.getElementById('levelOneEntry');
	levelOneEntry.value = ""; 
	
	if (letterCount <= stringOfLetters.length) {
		for (i = 0; i < letterCount; i++){
			levelOneEntry.value = levelOneEntry.value + stringOfLetters[i]
		}
	}
	else if (letterCount > stringOfLetters.length){
		levelOneEntry.value = levelOneAnswer.innerHTML; 
		$('#levelOneEnter').trigger('click');
	}		
	
	letterCount++;
} 

var giveMeButton = document.getElementById('giveMeButton');
giveMeButton.addEventListener('click', letterCounter, false);



// Level I - Help Buttons

$("#helpButton").click(function() { 
	$('.gameBoard').toggle();
	$('#help').toggle();
});

$("#backToTheGame").click(function() { 
	$('.gameBoard').toggle();
	$('#help').toggle();
});







//Level II - Lower Game Buttons 

$("#levelTwoClueButton").click(function() { 
  $('.clue').toggle();
});

$("#levelTwoGiveMeButton").click(function() { 
  alert("You clicked the \"Give Me Letter\" button");
});

$("#levelTwoHelpButton").click(function() { 
  $('.gameInstructionsListSmall').toggle();
});






//**********Level I**********//


//Level I check answer	
var levelOneEnter = document.getElementById('levelOneEnter'); 
var levelOneEntry = document.getElementById('levelOneEntry');
var levelOneAnswer = document.getElementById('levelOneAnswer');
		
var wrongAnswer = document.getElementById('wrongAnswer');		
							
levelOneEnter.addEventListener('click', checkLevelOneAnswer, false); 
				
function checkLevelOneAnswer() {
	
	//console.log("Level 1 Answer Submitted");
	//console.log("You Entered: " + levelOneEntry.value);
	//console.log("The Correct Answer is: " + levelOneAnswer.innerHTML);
	
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
};



//"enter" keypress functionality
$(document).keypress(function(e) {
    if(e.keyCode == 13) {
    
    console.log("Enter was pressed");
    
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
	}
});


//Level I - Try Again
$("#levelOneTryAgain").click(function() { 
  
  	$('#gameBoardSection').show();
		
	$('.checkAnswer').hide();
	$('#levelOneCorrectAnswer').hide();

	levelOneEntry.value = ""
	letterCount = 1;  
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






//**********Level II**********//


//Level II check answer	
var levelTwoEnter = document.getElementById('levelTwoEnter'); 
var levelTwoEntry = document.getElementById('levelTwoEntry');
var levelTwoAnswer = document.getElementById('levelTwoAnswer');
							
levelTwoEnter.addEventListener('click', checkLevelTwoAnswer, false); 
				
function checkLevelTwoAnswer() {
	console.log("Level 2 Answer Submitted");
	console.log("You Entered: " + levelTwoEntry.value);
	console.log("The Correct Answer is: " + levelTwoAnswer.innerHTML);
	
	if (levelTwoEntry.value == levelTwoAnswer.innerHTML) {
		//alert("CORRECT");
		$('.checkAnswer').show();
		$('#levelTwoCorrectAnswer').show();
		$('#levelTwoWrongAnswer').hide();		
		}
	
	else {
		//alert("Sorry.Try Again.");
		$('.checkAnswer').show();
		$('#levelTwoCorrectAnswer').hide();
		$('#levelTwoWrongAnswer').show();		
		}	
};
	
	
	
	
	

   
		

//**********Global**********//

$("input:text:visible:first").focus();



//**********Lower Game Buttons**********//



//Level I lower game buttons 
$("#levelOneClueButton").click(function() { 
  $('.clue').toggle();
});

$("#levelOneGiveMeButton").click(function() { 
  alert("You clicked the \"Give Me Letter\" button");
  //$('.clue').toggle();
});

$("#levelOneHelpButton").click(function() { 
  //alert("You clicked the \"Help\" button");
  $('.gameInstructionsListSmall').toggle();
});




//Level II lower game buttons 
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
							
levelOneEnter.addEventListener('click', checkLevelOneAnswer, false); 
				
function checkLevelOneAnswer() {
	console.log("Level 1 Answer Submitted");
	console.log("You Entered: " + levelOneEntry.value);
	console.log("The Correct Answer is: " + levelOneAnswer.innerHTML);
	
	if (levelOneEntry.value == levelOneAnswer.innerHTML) {
		$('.checkAnswer').show();
		$('#levelOneCorrectAnswer').show();
		$('#levelOneWrongAnswer').hide();		
		}
	
	else {
		$('.checkAnswer').show();
		$('#levelOneCorrectAnswer').hide();
		$('#levelOneWrongAnswer').show();		
		}	
};



//"enter" keypress functionality
$(document).keypress(function(e) {
    if(e.keyCode == 13) {
    
    console.log("Enter was pressed");
    
    	if (levelOneEntry.value == levelOneAnswer.innerHTML) {
			$('.checkAnswer').show();
			$('#levelOneCorrectAnswer').show();
			$('#levelOneWrongAnswer').hide();		
		}
		else {
			$('.checkAnswer').show();
			$('#levelOneCorrectAnswer').hide();
			$('#levelOneWrongAnswer').show();	
		}	        
	}
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
	
	
	
	
	

   
		

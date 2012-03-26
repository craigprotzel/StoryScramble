//Level I

$("input:text:visible:first").focus();

//Code to manage lower game buttons 
$("#levelOneClueButton").click(function() { 
  $('.clue').toggle();
});



//code to compare text entry to the correct answer	
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


//add enter keypress functionality
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


//Level II

//code to compare text entry to the correct answer	
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
	
	
	
	
	

   
		

//code to reveal clue
$(".clueButtons").click(function() {
  $('.hidden').hide();
  $('.clue').show();
});


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
		alert("CORRECT");
		}
	else {
		alert("Sorry.Try Again.");
		}	
};

			
			

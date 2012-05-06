//for the api query
var requestURL = require('request');

var express = require('express');  
var ejs = require('ejs'); //embedded javascript template engine

var app = express.createServer(express.logger());

var mongoose = require('mongoose'); //include Mongoose MongoDB Library
var schema = mongoose.Schema;

var MONOGOLAB_URI;

/************ DATABASE CONFIGURATION **********/
app.db = mongoose.connect(process.env.MONGOLAB_URI); //connect to the mongolabs database - local server uses .env file

// include the database model / schema
require('./models').configureSchema(schema, mongoose);

// Define your DB Model variables

//first practice db entry
var StoryEntry = mongoose.model('StoryEntry');

//USA Today API Call
var stories_db = mongoose.model('stories_db');

/************* END DATABASE CONFIGURATION *********/




/*********** SERVER CONFIGURATION *****************/
app.configure(function() {
    
    /*********************************************************************************
        Configure the template engine
        We will use EJS (Embedded JavaScript) https://github.com/visionmedia/ejs
        
        Using templates keeps your logic and code separate from your HTML.
        We will render the html templates as needed by passing in the necessary data.
    *********************************************************************************/

    app.set('view engine','ejs');  // use the EJS node module
    app.set('views',__dirname+ '/views'); // use /views as template directory
    app.set('view options',{layout:true}); // use /views/layout.html to manage your main header/footer wrapping template
    app.register('html',require('ejs')); //use .html files in /views

    /******************************************************************
        The /static folder will hold all css, js and image assets.
        These files are static meaning they will not be used by
        NodeJS directly. 
        
        In your html template you will reference these assets
        as yourdomain.heroku.com/img/cats.gif or yourdomain.heroku.com/js/script.js
    ******************************************************************/
    app.use(express.static(__dirname + '/static'));
    
    //parse any http form post
    app.use(express.bodyParser());
    
    /**** Turn on some debugging tools ****/
    app.use(express.logger());
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

});
/*********** END SERVER CONFIGURATION *****************/



//the template data variables

//old variables
//var contentType = ['Headlines','Articles', 'Images', 'Audio', 'Video'];
//var storyTopics = ['Top News','Travel','Sports']; 
//storyScrambleArray = [];


//usa today variables
var source = 'USA_Today';
var topic = '';

var categories = ['Words', 'Headlines'];	  
var categoryChosen = '';

var storyTopics = ['Offbeat','Travel','Weather'];
var requestedTopic = '';

var levels = ['levelOne','levelTwo','levelThree'];
var requestedLevel = '';




	

//Main Page - Choose Topic
app.get('/', function(request, response) {
	
	response.render("main.html");

});	


//Categories Page - Choose Topic
app.get('/categories', function(request, response) {
	
	response.render("categories.html");

});	


app.post('/categoryChoice_words', function(request, response){

	console.log("WORDS Category Was Chosen");
	categoryChosen = 'Words'; 
	
	response.redirect('/topics');

});

app.post('/categoryChoice_headlines', function(request, response){

	console.log("HEADLINES Category Was Chosen");
	categoryChosen = 'Headlines'; 
	
	response.redirect('/topics');

});


//Topics Page
app.get('/topics', function(request,response){

	response.render("topics.html");

});
		
//Levels - News Page
app.get('/news', function(request, response) {
    
    requestedTopic = 'Offbeat';
    response.render("levels_news.html");
    
});

//Levels - Travel Page
app.get('/travel', function(request, response) {
    
    requestedTopic = 'Travel';
    response.render("levels_travel.html");
    
});

//Levels - Weather Page
app.get('/weather', function(request, response) {
    
    requestedTopic = 'Weather';
    response.render("levels_weather.html");
    
});



//Display Level I Pages - ONE WORD SCRAMBLED
app.get('/instructions_level_I', function(request, response) {

	requestedLevel = 'LevelOne';	
	response.render("instructions_level_I.html");

});




app.get('/storyscramble_level_I', function(request, response) {  

	var getRandom;
	var wordsLevelCheck;
	
	var stopWords = false;

    //get all the stories from the db
    var query = stories_db.find({'topic' : requestedTopic});

    //sort by date in descending order
    query.sort('date',-1);
    query.limit(150); 

    //run the query
    query.exec({}, function(err, allStories){
        
        getRandom = function() {
	        randomNum = Math.floor(Math.random()*allStories.length);
			randomStory = allStories[randomNum];
			
	        //prepare template data
	        templateData = {
	            randomStory : randomStory
	        };
	    	return randomStory
        }
        
        randomStory = getRandom();
        
		
	    if (categoryChosen == "Words"){
	          
	       	//WORDS LEVEL CHECK FUNCTION
	    	wordsLevelCheck = function(randomStory, response) { 
	    
				var masterHeadlineBackEnd = randomStory.title; 
				var masterHeadlineLowerBackEnd = masterHeadlineBackEnd.toLowerCase();  
				var masterWordsBackEnd = masterHeadlineLowerBackEnd.split(" ");
				    	
				var wordsSplitBackEnd = [];
				var usableWordsBackEnd = [];
				
				var lowNumBackEnd = 4;
				var highNumBackEnd = 6;
			
				for (var i = 0; i < masterWordsBackEnd.length; i++){
						
					wordsSplitBackEnd[i] = masterWordsBackEnd[i].split(""); 
					
					if (wordsSplitBackEnd[i].length >= lowNumBackEnd && wordsSplitBackEnd[i].length <= highNumBackEnd) { 
						usableWordsBackEnd.push(masterWordsBackEnd[i]); 
				 	}  			
				} 
						
				//check usable words to see if they have punctuation
				if (usableWordsBackEnd.length >= 1) {
					for (var i = 0; i < usableWordsBackEnd.length; i++){
						if (usableWordsBackEnd[i].match(/[\W+]/)) {
							stopWords = true;
							console.log("FOUND A STOP WORD!!!!!!!!!!!!!!!!!");
							break;		
						}
						else {
							stopWords = false;
							console.log("NO STOP WORDS!!!!!!!!!!!")
						}
					}
				}	
										
				if (usableWordsBackEnd.length < 1){
					//need to choose another story, recursively run the function	
					newrandomStory = getRandom();
					wordsLevelCheck(newrandomStory, response);	
				}
				
				else if (stopWords){
					stopWords = false;
					newrandomStory = getRandom();
					wordsLevelCheck(newrandomStory, response);
				}	
				
				else {
					response.render("storyscramble_word_short.html", templateData);
				}
			} 
			//END of wordsLevelCheck()

	    	wordsLevelCheck(randomStory, response);    	
		}  
		    
	    else if (categoryChosen == "Headlines") {  
	        response.render("storyscramble_word.html", templateData);
	    }                

	    else {
	    	response.render("categories.html", templateData);
	    }
	});
});



// Display Level II Instructions Page - TWO WORDS SCRAMBLED 
app.get('/instructions_level_II', function(request, response) {
	
	requestedLevel = 'LevelTwo';	
	response.render("instructions_level_II.html");

});


app.get('/storyscramble_level_II', function(request, response) {

	var getRandom;
	var wordsLevelCheck;
	
	var stopWords = false;
    
    //get all the stories from the db
    var query = stories_db.find({'topic' : requestedTopic});

    //sort by date in descending order
    query.sort('date',-1);
    query.limit(150); 

    //run the query
    query.exec({}, function(err, allStories){
        
        getRandom = function() {
	        randomNum = Math.floor(Math.random()*allStories.length);
			randomStory = allStories[randomNum];
			
	        //prepare template data
	        templateData = {
	            randomStory : randomStory
	        };
	    	return randomStory
        }
        
        randomStory = getRandom();
        
		
	    if (categoryChosen == "Words"){
	       
	       	//WORDS LEVEL CHECK FUNCTION
	    	wordsLevelCheck = function(randomStory, response) { 
	    
				var masterHeadlineBackEnd = randomStory.title; 
				var masterHeadlineLowerBackEnd = masterHeadlineBackEnd.toLowerCase();  
				var masterWordsBackEnd = masterHeadlineLowerBackEnd.split(" ")
				    	
				var wordsSplitBackEnd = [];
				var usableWordsBackEnd = [];
				
				var lowNumBackEnd = 7;
				var highNumBackEnd = 9;
			
				for (var i = 0; i < masterWordsBackEnd.length; i++){
						
					wordsSplitBackEnd[i] = masterWordsBackEnd[i].split(""); 
					
					if (wordsSplitBackEnd[i].length >= lowNumBackEnd && wordsSplitBackEnd[i].length <= highNumBackEnd) { 
						usableWordsBackEnd.push(masterWordsBackEnd[i]); 
				 	}  			
				} 

				
				//check usable words to see if they have punctuation
				if (usableWordsBackEnd.length >= 1) {
					for (var i = 0; i < usableWordsBackEnd.length; i++){
						if (usableWordsBackEnd[i].match(/[\W+]/)) {
							stopWords = true;
							console.log("FOUND A STOP WORD!!!!!!!!!!!!!!!!!");
							break;		
						}
						else {
							stopWords = false;
							console.log("NO STOP WORDS!!!!!!!!!!!")
						}
					}
				}	
						
				if (usableWordsBackEnd.length < 1){
					//need to choose another story, recursively run the function	
					newrandomStory = getRandom();
					wordsLevelCheck(newrandomStory, response);	
				}
				
				else if (stopWords){
					stopWords = false;
					newrandomStory = getRandom();
					wordsLevelCheck(newrandomStory, response);
				}
				
				else {
					response.render("storyscramble_word_medium.html", templateData);
				}
			} 
			//END of wordsLevelCheck()

	    	wordsLevelCheck(randomStory, response);    	
		}  

	    else if (categoryChosen == "Headlines") {  
	        response.render("storyscramble_two_words.html", templateData);
	    }                
	    
	    else {
	    	response.render("categories.html", templateData);
	    }   
    });                
});


//Display Level III Page - TITLE WORDS SCRAMBLED 

app.get('/instructions_level_III', function(request, response) {
	
	requestedLevel = 'LevelThree';
	response.render("instructions_level_III.html");

});


//Display Level III Page - ALL USA TODAY ENTRIES

app.get('/storyscramble_level_III', function(request, response) {

	var getRandom;
	var wordsLevelCheck;
	
	var stopWords = false;

    //get all the stories from the db
    var query = stories_db.find({'topic' : requestedTopic});

    //sort by date in descending order
    query.sort('date',-1);
    query.limit(150); 

    //run the query
    query.exec({}, function(err, allStories){
        
        getRandom = function() {
	        randomNum = Math.floor(Math.random()*allStories.length);
			randomStory = allStories[randomNum];
			
	        //prepare template data
	        templateData = {
	            randomStory : randomStory
	        };
	    	return randomStory
        }
        
        randomStory = getRandom();
        
		
	    if (categoryChosen == "Words"){
	       
	       	//WORDS LEVEL CHECK FUNCTION
	    	wordsLevelCheck = function(randomStory, response) { 
	    
				var masterHeadlineBackEnd = randomStory.title; 
				var masterHeadlineLowerBackEnd = masterHeadlineBackEnd.toLowerCase();  
				var masterWordsBackEnd = masterHeadlineLowerBackEnd.split(" ")
				    	
				var wordsSplitBackEnd = [];
				var usableWordsBackEnd = [];
				
				var lowNumBackEnd = 10;
				var highNumBackEnd = 50;
			
				for (var i = 0; i < masterWordsBackEnd.length; i++){
						
					wordsSplitBackEnd[i] = masterWordsBackEnd[i].split(""); 
					
					if (wordsSplitBackEnd[i].length >= lowNumBackEnd && wordsSplitBackEnd[i].length <= highNumBackEnd) { 
						usableWordsBackEnd.push(masterWordsBackEnd[i]); 
				 	}  			
				} 

				//check usable words to see if they have punctuation
				if (usableWordsBackEnd.length >= 1) {
					for (var i = 0; i < usableWordsBackEnd.length; i++){
						if (usableWordsBackEnd[i].match(/[\W+]/)) {
							stopWords = true;
							console.log("FOUND A STOP WORD!!!!!!!!!!!!!!!!!");
							break;		
						}
						else {
							stopWords = false;
							console.log("NO STOP WORDS!!!!!!!!!!!")
						}
					}
				}	
			
				if (usableWordsBackEnd.length < 1){
					//need to choose another story, recursively run the function	
					newrandomStory = getRandom();
					wordsLevelCheck(newrandomStory, response);	
				}
				
				else if (stopWords){
					stopWords = false;
					newrandomStory = getRandom();
					wordsLevelCheck(newrandomStory, response);
				}
				
				else {
					response.render("storyscramble_word_long.html", templateData);
				}
			} 
			//END of wordsLevelCheck()

	    	wordsLevelCheck(randomStory, response);    	
		}  
	    
	    else if (categoryChosen == "Headlines") {  
	        response.render("storyscramble_title.html", templateData);
	    }                
	    
	    else {
	    	response.render("categories.html", templateData);
	    }  
    });                
});


app.get('/ajaxgetarticle', function(request, response){

	articleURL = request.query.url;
	articleURL = articleURL.replace(/apidata/g, "content");
	
	console.log("this is the article!!!!!!!!!! " + articleURL);
	
	if (articleURL) {
		
		diffbotURL = "http://www.diffbot.com/api/article?token=dc81f6c99eeff87f2a12411cd446e63c&url=" + articleURL;
		
		requestURL(diffbotURL, function(err, http, jsonData) {
		
			//convert json to native js
			diffbotData = JSON.parse(jsonData);
			
			try { 						
			// get the diff bot data you want
				articleData = {
					title : diffbotData.title,
					text : diffbotData.text,
					media : diffbotData.media
					
				}
			}
			catch(err) {
				articleData = {
					title : diffbotData.title,
					text : diffbotData.text,
					media : "null"
				}
			}
			//respond with json
			response.json(articleData);
		});
	
	}
});


//USA Today API Query - click button on Main Page

/*
app.post('/usaTodayAPIQuery', function (request,response) {

	console.log("hit usaTodayAPIQuery");
	// the url you need to request from USA Today
    // this will return the 10 top news articles in json format
    var url = "http://api.usatoday.com/open/articles/weather?encoding=json&count=6&api_key=85gehs983tmqbwxz4uwk6ghv"
    
	
    // make the request to USA Today api
    requestURL(url, function (error, response, usaTodayJSON) {
        
        // if successful
        if (!error && response.statusCode == 200) {

            // convert usaTodayJSON into JS object, usaTodayData
            usaTodayData = JSON.parse(usaTodayJSON);    
    		
    		
        	//*****FOR MONGO DB*****
        	
            for (var i = 0; i < usaTodayData.stories.length; i++) {
            	var newStory = new stories_db( {
            		source : source,
            		topic : topic,
            		title : usaTodayData.stories[i].title,
            		link: usaTodayData.stories[i].link,
            		description : usaTodayData.stories[i].description,
            		source_guid : usaTodayData.stories[i].guid[0].value,
            		pubDate : usaTodayData.stories[i].timestamp 
            				
            	})
            	         	
            	newStory.save();	
            }          
        }
    });
    
    response.redirect('/');

});
*/





//Make server turn on and listen at defined PORT (or port 3000 if is not defined)
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});






//////////Functions for the Views Pages//////////

app.helpers({


	//reg ex to get article date
	pullDate: function(chars){
		
		//var printDate = chars.toString();
		//chars.search()
		/* for weather - (?<=story\/).{10} */
		/* for news and travel - (?<=post\/).{7} */
		return chars
		
	}
	
	//functions for Words Level I, II, & III
	
	//pass in all the words from the headline and the desired char range
	,countChars: function(wordsList, lowNum, highNum){
	
		var wordsSplit = [];
		var usableWords = [];
	
		for (var i = 0; i < wordsList.length; i++){
	  		wordsSplit[i] = wordsList[i].split(""); 
	  		
	  		if (wordsSplit[i].length >= lowNum && wordsSplit[i].length <= highNum) { 
	  			usableWords.push(wordsList[i]); 
	  		 }  			
		} 
		return usableWords;
	}
	
		
	, convertIndexToMaster: function(word, wordsList){
	
		for (var i = 0; i < wordsList.length; i++){
			if (word == wordsList[i]){
				return i;
			}		
		}
	}
	
	//being used in Words Levels I & II
	, chooseRandom: function (wordsList){
	
		var random = function() { 
				return (0.5 - Math.random()); 
			}; 

		var newWordsList = wordsList.slice(0);
		newWordsList = wordsList.sort(random);
	
		for (var i = 0; i < wordsList.length; i++){
			if (newWordsList[0] == wordsList[i]) {
				return i;
			}
		}
		return -1
	}
	
	//function for all Word Levels & Headlines Level I
    , longestOne: function(wordslist){ 
    	
    	var sortLongToShort = function(a,b) {
			return(b.toString().length - a.toString().length);
		};
		var sorted = wordslist.slice(0);
		sorted = sorted.sort(sortLongToShort);

		for (var i = 0; i < wordslist.length; i++){
			if (sorted[0] == wordslist[i]) {
				return i;
			}
		}
		return -1
    }
    
    
    //function for Headlines Level II
	, longestTwo: function(wordslist){ 
    	
    	var sortLongToShort = function(a,b) {
			return(b.toString().length - a.toString().length);
		};
		var sorted = wordslist.slice(0);
		var sorted = sorted.sort(sortLongToShort);

		var twoLongest = [];
		
		for (var i = 0; i < wordslist.length; i++){
			if (sorted[0] == wordslist[i] || sorted[1] == wordslist[i]) {
				twoLongest.push(i);
			}
		} 
		return twoLongest;
    }
    
    
  , cleanup : function(word) {
    	word = word.replace(/[^\w ]/, "");
    	return word.toLowerCase();
    }
    
  , scramble : function (word){
  		
  		//here we use regex to find punctuation and save it for adding it after scrambling.
  		//this strips out all the punctuation
  		//wordNew = word.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  		//wordNew = word.replace(/[^\w ]/, "");
  		
  		var random = function() { 
				return (0.5 - Math.random()); 
			}; 
				
		var characters = word.split("");		
		
		//run sort a few times
		characters.sort(random); 
		characters.sort(random); 
		characters.sort(random); 
		
		//before returning you would add back the punctuation you removed at the beginning.

		return characters.join("");
	}
  
  , compareWords : function(one, two){
  		var onechars = one.split(''),
  			twochars = two.split(''),
  			likeness = 0,
  			looper = []; 			
  			
  			if (onechars.length > twochars.length){
  				looper = twochars.length;
  			} 
  			else {
  				looper = onechars.length;	
  			}
 
  			for (var i = 0; i < looper; i++){
  				if (onechars[i] === twochars[i]) {
  					likeness++;
  				}
  			}
  			
  			var diff = Math.abs(onechars.length - twochars.length);
  			
  			if (diff < 2) {
		  		if ( likeness > (looper - 2) ) {
		  				return true;
		  		} 
		  		else {
		  				return false;
		  		}
  			}
  		}
  		
	  , compareWordsLevelThree : function(one, two){
		var onechars = one.split(''),
			twochars = two.split(''),
			likeness = 0,
			looper = []; 			
			
			if (onechars.length > 5 && twochars.length > 5){
				if (onechars.length > twochars.length){
					looper = twochars.length;
				} 
				else {
					looper = onechars.length;	
				}
	
				for (var i = 0; i < looper; i++){
					if (onechars[i] === twochars[i]) {
						likeness++;
					}
				}
				
				var diff = Math.abs(onechars.length - twochars.length);
				
				if (diff < 2) {
			  		if ( likeness > (looper - 2) ) {
			  				return true;
			  		} 
			  		else {
			  				return false;
			  		}
				}
			}
		}

});










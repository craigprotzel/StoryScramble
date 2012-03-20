//for the api query
var requestURL = require('request');

var express = require('express');  
var ejs = require('ejs'); //embedded javascript template engine

var app = express.createServer(express.logger());

var mongoose = require('mongoose'); //include Mongoose MongoDB Library
var schema = mongoose.Schema;

/************ DATABASE CONFIGURATION **********/
app.db = mongoose.connect(process.env.MONGOLAB_URI); //connect to the mongolabs database - local server uses .env file

// include the database model / schema
require('./models').configureSchema(schema, mongoose);

// Define your DB Model variables

//first practice db entry
var StoryEntry = mongoose.model('StoryEntry');

//USA Today API Call
var StoriesDB = mongoose.model('StoriesDB');

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



// the template data variables

//old variables
var contentType = ['Headlines','Articles', 'Images', 'Audio', 'Video'];
var storyTopics = ['Top News','Travel','Sports']; 
storyScrambleArray = [];

//usa today variables
var source = 'USA_Today';

		
		
// Main Page
app.get('/', function(request, response) {
    
    response.render("main.html");

});



//USA Today API Query - click button on Main Page
app.post('/usaTodayAPIQuery', function (request,response) {

	console.log("in get usaTodayAPIQuery");
	// the url you need to request from USA Today
    // this will return the 10 top news articles in json format
    var url = "http://api.usatoday.com/open/articles/topnews?encoding=json&count=10&api_key=85gehs983tmqbwxz4uwk6ghv"
	
    // make the request to USA Today api
    requestURL(url, function (error, response, usaTodayJSON) {
        
        // if successful
        if (!error && response.statusCode == 200) {

            // convert usaTodayJSON into JS object, usaTodayData
            usaTodayData = JSON.parse(usaTodayJSON);    
    		
    		
        	//*****FOR MONGO DB*****
        	
            for (var i = 0; i < usaTodayData.StoriesDB.length; i++) {
            	var newStory = new StoriesDB( {
            		source : source,
            		title : usaTodayData.StoriesDB[i].title,
            		link: usaTodayData.StoriesDB[i].link,
            		description : usaTodayData.StoriesDB[i].description,
            		source_guid : usaTodayData.StoriesDB[i].guid[0].value,
            		pubDate : usaTodayData.StoriesDB[i].timestamp 
            				
            	})
            	
            	newStory.save();	
            }          
        }
    });
    
    response.redirect('/');

});






// Display Level II Page 

app.get('/storyscramble_level_II', function(request, response) {
    
    
    //get all the stories and display
    var query = StoriesDB.find({});
    query.sort('date',-1); //sort by date in descending order
    
    // run the query and display blog_main.html template if successful
    query.exec({}, function(err, allStories){
        
        // prepare template data
        templateData = {
            stories : allStories
        };
        
        // render the card_form template with the data above
        response.render("storyscramble_level_II.html", templateData);
        
    });
    
    
    //get a random story by its unique id and display it 
/*
    var requestedStoryID = request.params.Id;
    
    
    stories.findById( requestedStoryID, function(err, blogpost) {
        
        if (err) {
            console.log(err);
            response.send("an error occurred!");
        }
        
        if (blogpost == null ) {
            console.log('post not found');
            response.send("uh oh, can't find that post");

        } else {

            // use different layout for single entry view
            blogpost.layout = 'layout_single_entry.html';
        
            // found the blogpost
            response.render('blog_single_entry.html', blogpost);
        }
        
    })
*/
    
    
       
    
});





// Display Level III Page

app.get('/storyscramble_level_III', function(request, response) {
    var templateData = { 

    };
    
    // render the card_form template with the data above
    response.render("storyscramble_level_III.html",templateData);
});


// Display Level I Page

app.get('/storyscramble_level_I', function(request, response) {
    var templateData = {
    	contentType : contentType, 
        storyTopics : storyTopics
    };
    
    // render the story_form template with the data above
    response.render("storyscramble_level_I.html",templateData);
});


// receive a form submission from Level I page


//Receive Story Scramble Name & Topics
app.post('/storyscramble_level_I_post', function(request, response){
    console.log("Inside app.post('/')");
    console.log("form received and includes")
    console.log(request.body);
    
    // Simple data object to hold the form data
    var newStoryScramble = {
    	
    	storyName : request.body.storyName, 
		contentType : request.body.contentType,
    	storyTopics : request.body.storyTopics
				  
    };
    
    //post this data to the db
    var post = new StoryEntry(newStoryScramble);
    
    // save the blog post
    post.save();
    
    
    // Put this newStoryScramble object into the scrambleArray
    storyScrambleArray.push(newStoryScramble);
    
    // Get the position of the story in the storyArray    
    storyScrambleNum = storyScrambleArray.length - 1;

    response.redirect('/storyscramble_data/' + storyScrambleNum);
	//response.json(newStoryScramble);
});



app.get('/storyscramble_data/:storyScrambleNum', function(request, response){
    
    // get the requested story number    
    storyScrambleNum = request.params.storyScrambleNum;

    // Get the card from cardArray
    //cardData = cardArray[cardNumber];  // cardData contains 'to','from','message','image'
    
    storyScrambleData = storyScrambleArray[storyScrambleNum];
    
    
    if (storyScrambleData != undefined) {
        
        // Render the card_display template - pass in the cardData
        response.render("storyscramble_data.html", storyScrambleData);
        
    } else {
        // card not found. show the 'Card not found' template
        response.render("storyscramble_data_notfound.html");        
    }
    
});



// Make server turn on and listen at defined PORT (or port 3000 if is not defined)
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
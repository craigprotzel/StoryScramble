var express = require('express'); // 
var ejs = require('ejs'); //embedded javascript template engine
var app = express.createServer(express.logger());


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
	var contentType = ['Headlines','Articles', 'Images', 'Audio', 'Video'];
	var storyTopics = ['History','Travel','Sports']; 

	storyScrambleArray = [];


// Main Page - display the CleverHealth Main Page

app.get('/', function(request, response) {
    
    response.render("main.html");

});



// Display Level II Page 

app.get('/storyscramble_level_II', function(request, response) {
    var templateData = { 
     
    };
    
    // render the card_form template with the data above
    response.render("storyscramble_level_II.html",templateData);
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
    
    // Put this newStoryScramble object into the scrambleArray
    storyScrambleArray.push(newStoryScramble);
    
    // Get the position of the story in the storyArray    
    storyScrambleNum = storyScrambleArray.length - 1;

    response.redirect('/storyscramble_data/' + storyScrambleNum);
	//response.json(newStoryScramble);
});



// Display a specific card 
//app.get('/card/:cardNumber', function(request, response){
app.get('/storyscramble_data/:storyScrambleNum', function(request, response){
    // get the requested card number
    //cardNumber = request.params.cardNumber;
    
    // ???why do we need this line???
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


/*
// Route to display card form template without the layout (Header and Footer)
app.get('/notfancy',function(request, response){
    
    // display the card form template without the default Layout (header and footer). 
    // set templateData.layout = false as show below.
    // layout : false tells express to not use the layout template and just render and return the requested template
    
    var templateData = { 
        pageTitle : 'Valentine Card Maker',
        images: valentineImages,
        layout: false
    };
    response.render("card_form.html",templateData);
});
*/




// Make server turn on and listen at defined PORT (or port 3000 if is not defined)
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
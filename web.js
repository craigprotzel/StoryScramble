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
	var contentType = ['headlines','articles', 'images', 'audio', 'video'];
	var newsTopics = ['history','travel','sports']; 

	newsScrambleArray = [];


// Main Page - display the CleverHealth Main Page

app.get('/', function(request, response) {
    
    response.render("main.html");

});



// Word Maker Page - display the Word Maker Page

app.get('/wordmaker', function(request, response) {
    var templateData = { 

    };
    
    // render the card_form template with the data above
    response.render("wordmaker.html",templateData);
});


// Video Puzzle Page - display the Video Puzzle Page

app.get('/videopuzzle', function(request, response) {
    var templateData = { 
        /* pageTitle : 'CleverHealth Main', */
        /* images: valentineImages */
    };
    
    // render the card_form template with the data above
    response.render("videopuzzle.html",templateData);
});


// News Scramble Page - display the News Scramble Page

app.get('/newsscramble', function(request, response) {
    var templateData = {
    	contentType : contentType, 
        newsTopics : newsTopics
    };
    
    // render the card_form template with the data above
    response.render("newsscramble.html",templateData);
});


// receive a form submission

//Receive News Scrqmble Name & Topics
app.post('/newsscramble_post', function(request, response){
    console.log("Inside app.post('/')");
    console.log("form received and includes")
    console.log(request.body);
    
    // Simple data object to hold the form data
    var newNewsScramble = {
    	
    	newsName : request.body.newsName, 
		contentType : request.body.contentType,
    	newsTopics : request.body.newsTopics
        
        /*
		to : request.body.to,
        from : request.body.from,
        message : request.body.message,
        image : request.body.image
		*/
				  
    };
    
    // Put this newCard object into the cardArray
    //cardArray.push(newCard);
    
    newsScrambleArray.push(newNewsScramble);
    
    // Get the position of the card in the cardArray
    //cardNumber = cardArray.length - 1;
    
    newsScrambleNum = newsScrambleArray.length - 1;
    
    //response.redirect('/card/' + cardNumber); // for example /card/1

    response.redirect('/newsscramble/' + newsScrambleNum);
	//response.json(newNewsScramble);
});



// Display a specific card 
//app.get('/card/:cardNumber', function(request, response){
app.get('/newsscramble/:newsScrambleNum', function(request, response){
    // get the requested card number
    //cardNumber = request.params.cardNumber;
    
    // ???why do we need this line???
    newsScrambleNum = request.params.newsScrambleNum;

    // Get the card from cardArray
    //cardData = cardArray[cardNumber];  // cardData contains 'to','from','message','image'
    
    newsScrambleData = newsScrambleArray[newsScrambleNum];
    
    
    if (newsScrambleData != undefined) {
        
        // Render the card_display template - pass in the cardData
        response.render("newsscramble_data.html", newsScrambleData);
        
    } else {
        // card not found. show the 'Card not found' template
        response.render("newsscramble_data_notfound.html");        
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
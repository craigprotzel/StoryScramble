// export Schemas to web.js
module.exports.configureSchema = function(Schema, mongoose) {

    
    // StoryEntry  
    var StoryEntry = new Schema({
    	storyName : String, 
		contentType : String, 
    	storyTopics : String 
      });

    // add schema to Mongoose
    mongoose.model('StoryEntry', StoryEntry);
    
    
       
   	// USA Today API 
    var stories_db = new Schema ({
		
		source: String,
		topic: String,
		title: String,
		link: String,
		pubDate : String,
		description :  String,
		source_guid : String,
		timestamp : {type : Date, default : Date.now}
		});
	
	//add schema to Mongoose
	mongoose.model('stories_db',stories_db);

    
};



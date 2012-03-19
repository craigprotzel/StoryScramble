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
    var stories = new Schema ({
		
		source: String,
		title: String,
		link: String,
		pubDate : String,
		description :  String,
		source_guid : String,
		timestamp : {type : Date, default : Date.now}
		});
	
	//add schema to Mongoose
	mongoose.model('stories',stories)

    
};



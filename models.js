// export Schemas to web.js
module.exports.configureSchema = function(Schema, mongoose) {
        
    // StoryEntry - 
    var StoryEntry = new Schema({
    	storyName : String, 
		contentType : String, 
    	storyTopics : String 
      });

    // add schemas to Mongoose
    mongoose.model('StoryEntry', StoryEntry);
    
};
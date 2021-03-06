
var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  link: String,
  upvotes: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
});

// Here we've defined a model called Post with several attributes corresponding to the type of data we'd like to store. We've declared our upvotes field to be an object that is initialized to 0 and we've set our comments field to an array of Comment references. This will allow us to use Mongoose's built in populate() method to easily retrieve all comments associated with a given post.

// Next we register that model with with the global mongoose object we imported using require() so that it can be used to interact with the database anywhere else mongoose is imported.

// method to save the post upvote states
PostSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

mongoose.model('Post', PostSchema);

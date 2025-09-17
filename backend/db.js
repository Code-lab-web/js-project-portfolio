import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the schema for our blog post
const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

// Create a model from the schema
const Blog = mongoose.model('Blog', blogSchema);

// Function to connect to the database
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Connect to the database
main().catch(err => console.log(err));

// Export the model for use in other parts of the application
export default Blog;

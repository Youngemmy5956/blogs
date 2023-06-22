import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    name: { type: String, required: true },
    upvotes: { type: Number, required: true },
    comments: [{ type: String, required: true }]
   
});

const Blog_model = mongoose.model("Blogs", blogSchema);

export default Blog_model;
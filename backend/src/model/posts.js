import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    name: { type: String, required: true },
    upvotes: { type: Number, required: true },
    comments: [{ type: String, required: true }]
   
});

const Post_model = mongoose.model("Posts", PostSchema);

export default Post_model;
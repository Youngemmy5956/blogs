import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    author: { type: String, required: true },
    titles: { type: String, required: true },
    description: [{ type: String, required: true }],
    posts : { type: String, required: true },
    date : { type: Date, default: Date.now },
   
});

const Post_model = mongoose.model("Posts", PostSchema);

export default Post_model;
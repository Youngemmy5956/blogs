import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    author: { type: String, required: true },
    titles: { type: String, required: true },
    description: [{ type: String, required: true }],
    post : { type: String, required: true },
   
});

const Post_model = mongoose.model("Posts", PostSchema);

export default Post_model;
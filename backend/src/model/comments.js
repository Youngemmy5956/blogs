import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    name: { type: String, required: true },
    upvotes: { type: Number, required: true },
    comments: [{ type: String, required: true }],
    date: { type: Date, default: Date.now },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Likes" }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dislikes" }],
   
});

const Comment_model = mongoose.model("Comments", commentSchema);

export default Comment_model;
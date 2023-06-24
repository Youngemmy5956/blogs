import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: {type: Number, required: true},
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    role: { type: String, required: true },
    date: { type: Date, default: Date.now },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Posts" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comments" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Likes" }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dislikes" }],
    bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bookmarks" }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Followers" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "Following" }],
    notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Notifications" }],

});


const User_model = mongoose.model("Users", userSchema);

export default User_model;



    
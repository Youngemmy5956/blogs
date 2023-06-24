import mongoose from "mongoose";

const storeSchema = mongoose.Schema({
    name: { type: String, required: true },
    upvotes: { type: Number, required: true },
    comments: [{ type: String, required: true }]

});


const Store_model = mongoose.model("Stores", storeSchema);

export default Store_model;



    
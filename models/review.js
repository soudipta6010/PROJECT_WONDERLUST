const mongoose = require("mongoose");
// const { schema } = require("./listing");
const Schema = mongoose.Schema;

//Declaring Schema for review
const reviewSchema = new Schema({
    comment: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Review", reviewSchema)
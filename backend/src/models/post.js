const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is required",
        minLength: 3,
        maxLength: 100
    },
    body: {
        type: String
    }
},
    { collection: 'post' });

module.exports = mongoose.model("Post", postSchema);
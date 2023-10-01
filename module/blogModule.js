const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    subTitle:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

const Blog = mongoose.model('Blog',BlogSchema);

module.exports = Blog


const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    blogContent: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
    },
});

module.exports = mongoose.model('Blog', BlogSchema);

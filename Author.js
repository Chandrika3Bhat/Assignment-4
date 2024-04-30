const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    publishedDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Author', AuthorSchema);

const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String },
    likes: { type: Number, default: 0 },
    comments: [{ type: String }]
});

module.exports = mongoose.model('Video', videoSchema);

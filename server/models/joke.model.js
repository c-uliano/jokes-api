const mongoose = require('mongoose');

// * UPDATE KEY NAMES TO WHAT IS NEEDED IN THE DOCUMENT
const schema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required."],
        minlength: [10, "Setup must be at least 10 characters long."]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required."],
        minlength: [3, "Punchline must be at least 3 characters long."]
    }
}, { timestamps: true });

// const Rename = mongoose.model("Rename", schema);
// module.exports = Rename;
// OR
module.exports = mongoose.model("Joke", schema);

const mongoose = require('./mongoose');
const uniqueValidator = require('mongoose-unique-validator');
AuthorSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "*Author required"],
        minlength: [3, "Must be a least 3 characters"]
    }
})
AuthorSchema.plugin(uniqueValidator, { message: "Author already exists in the system" });
module.exports = mongoose.model('Author', AuthorSchema);


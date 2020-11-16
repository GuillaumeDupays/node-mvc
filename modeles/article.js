const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    titre: {type: String, required: true},
    description: {type: String, required: true},
/*    userId: String*/
});

module.exports = mongoose.model('Article', articleSchema);

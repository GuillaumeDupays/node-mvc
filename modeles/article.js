const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    titre: {type: String, required: true},
    description: {type: String, required: true},
    auteur: {
        type: Schema.Types.ObjectId,
        ref: 'Auteur'
    }
/*    userId: String*/
});

module.exports = mongoose.model('Article', articleSchema);

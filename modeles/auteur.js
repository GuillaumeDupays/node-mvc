const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const auteurSchema = new Schema({
   auteur: {type: String, required: true}
});

module.exports = mongoose.model('Auteur', auteurSchema);

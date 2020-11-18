const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const auteurSchema = new Schema({
   auteur: {type: String, required: true},
   articles : {
      type: Schema.Types.ObjectId,
      ref: 'Article'
   }
});

module.exports = mongoose.model('Auteur', auteurSchema);

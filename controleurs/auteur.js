
const Auteur = require('../modeles/auteur');

exports.creerAuteur = (req, res, next) => {
    // const articleObject = JSON.parse(req.body);
    const auteur = new Auteur(req.body);
    auteur.save()
        .then(() => res.status(201).json({ message: 'Auteur ajouté' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneAuteur = (req, res, next) => {
    Auteur.findOne({ _id: req.params.id })
        .populate('articles')
        .then(auteur => res.status(200).json(auteur))
        .catch(error => res.status(404).json({ error }));
 };

exports.getAllAuteurs = (req, res, next) => {
    Auteur.find()
        .then(auteurs => res.status(200).json(auteurs))
        .catch(error => res.status(400).json({ error }));
};

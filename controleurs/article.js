
const Article = require('../modeles/article');

exports.creerArticle = (req, res, next) => {
    // const articleObject = JSON.parse(req.body);
    const article = new Article(req.body);
    article.save()
        .then(() => res.status(201).json({ message: 'Article enregistré' }))
        .catch(error => res.status(400).json({ error }));
};

exports.modifierArticler = (req, res, next) => {
    Article.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id }, { auteur: req.auteur})
        .then(() => res.status(200).json({ message: 'Article modifié'}))
        .catch(error => res.status(400).json({ error }));
};

exports.supprimerArticle = (req, res, next) => {
    Article.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Article supprimé !'}))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneArticle = (req, res, next) => {
    Article.findOne({ _id: req.params.id })
        .populate('auteur')
        .then(article => res.status(200).json(article))
        .catch(error => res.status(404).json({ error }));
};

exports.getAllArticles = (req, res, next) => {
    Article.find()
        .then(articles => res.status(200).json(articles))
        .catch(error => res.status(400).json({ error }));
};

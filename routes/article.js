const express = require('express');
const router = express.Router();

const articleCtrl = require('../controleurs/article');

router.post('/', articleCtrl.creerArticle);
router.get('/', articleCtrl.getAllArticles);
router.get('/:id', articleCtrl.getOneArticle);
router.put('/:id', articleCtrl.modifierArticler);
router.delete('/:id', articleCtrl.supprimerArticle);

module.exports = router;

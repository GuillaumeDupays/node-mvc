const express = require('express');
const router = express.Router();

const auteurCtrl = require('../controleurs/auteur');

router.post('/', auteurCtrl.creerAuteur);
router.get('/', auteurCtrl.getAllAuteurs);
router.get('/:id', auteurCtrl.getOneAuteur);
/*router.put('/:id', articleCtrl.modifierArticler);
router.delete('/:id', articleCtrl.supprimerArticle);*/

module.exports = router;

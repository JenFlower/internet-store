const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');

// todo: add delete
router.post('/', typeController.createType);
router.get('/', typeController.getTypes);

module.exports = router;

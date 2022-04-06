const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController');

router.post('/', deviceController.createDevice);
router.get('/', deviceController.getDevices);
router.get('/:id', deviceController.getDeviceById);

module.exports = router;

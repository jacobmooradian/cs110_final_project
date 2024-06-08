const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const roomController = require('../controllers/roomController');

router.get('/chatrooms', homeController.getChatrooms);
router.post('/create', roomController.createRoom);
router.get('/:roomIdentifier/messages', roomController.getMessages);
router.post('/:roomIdentifier/messages', roomController.postMessage);

module.exports = router;

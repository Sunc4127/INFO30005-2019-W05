var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller.js');

// Create new cafe
router.post('/api',controller.createUsers);

module.exports = router;
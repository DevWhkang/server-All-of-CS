const express = require('express');
const { tagController } = require('../controller');

const router = express.Router();

router.get('/', tagController.get);

module.exports = router;

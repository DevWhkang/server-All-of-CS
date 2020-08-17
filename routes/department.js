const express = require('express');
const { departmentController } = require('../controller');

const router = express.Router();

router.get('/:id', departmentController.get);

module.exports = router;

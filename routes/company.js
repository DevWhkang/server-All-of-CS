const express = require('express');
const { companyController } = require('../controller');

const router = express.Router();

router.get('/:id', companyController.get);

module.exports = router;

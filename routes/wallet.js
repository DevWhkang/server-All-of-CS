const express = require('express');
const walletController = require('../controller/wallet');

const router = express.Router();

router.get('/', walletController.get);
router.get('/:id', walletController.getWithID);
router.post('/', walletController.post);

module.exports = router;

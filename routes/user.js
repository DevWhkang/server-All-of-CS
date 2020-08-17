const express = require('express');
const {
  userController: {
    infoController,
    signInController,
    signUpController,
    signOutController,
  },
} = require('../controller');

const router = express.Router();

router.get('/', infoController.get);
router.post('/sign-in', signInController.post);
router.post('/sign-up', signUpController.post);
router.get('/sign-out', signOutController.get);

module.exports = router;

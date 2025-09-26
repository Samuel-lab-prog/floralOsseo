const express = require('express');
const emailController = require('../controllers/emailController')
const router = express.Router();
router
.route('/submit')
  .post(emailController.addEmail)

module.exports = router;

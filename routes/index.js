// routes/index.js
// Main router file. Imports and combines all route modules.

const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.home);

module.exports = router;

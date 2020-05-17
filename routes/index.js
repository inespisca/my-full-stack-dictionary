const express = require('express');
const router = express.Router();
const { showWordPage } = require('../controllers/page-controller');
const { getWords } = require('../controllers/word-controller');

/* GET home page */
router.get('/', getWords, showWordPage);


module.exports = router;

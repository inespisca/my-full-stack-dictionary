const express = require('express');
const router = express.Router();
const {
	showWordAddPage,
	showWordEditPage,
} = require('../controllers/page-backoffice-controller');

const {
	getWordsId,
	createWords,
	deleteWords,
	editWords
} = require('../controllers/word-controller');


/* word add page */
router.get('/add', showWordAddPage);

/* create words */
router.post('/add', createWords);

/* word edit page */
router.get('/:id', getWordsId, showWordEditPage);

/* delete words */
router.post('/delete', deleteWords);

/* Edit words */
router.post('/:id', editWords);

module.exports = router;
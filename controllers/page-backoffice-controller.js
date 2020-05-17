const showWordAddPage = (req, res) => {
	res.render('backoffice/word_create', { title: 'Add a new word to the dictionary', user: req.user });
};

const showWordEditPage = (req, res) => {
	res.render('backoffice/word_edit', { title: 'Edit changes to a word in the dictionary', user: req.user, words: req.words });
};

module.exports = { showWordAddPage, showWordEditPage };
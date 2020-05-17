
const showWordPage = (req, res) => {
	res.render('website/dictionary', { title: 'Dictionary', word: req.word });
};

module.exports = { showWordPage };
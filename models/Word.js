/* eslint-disable quotes */

const connection = require('../db/config');

const word = {};

word.getWords = (callback) => {
	connection.query(`SELECT * FROM word ORDER BY name ASC`, (err, results) => {
		callback(err, results);
	});
};

word.getWordsId = (id, callback) => {
	connection.query(`SELECT * FROM word WHERE id=?`, id, (err, results, fields) => {
		callback(err, results[0], fields);
	});
};

word.create = (wordInfo, callback) => {
	connection.query(
		'INSERT INTO word (name, definition, related) VALUES (?, ?, ?)',
		[wordInfo.name, wordInfo.definition, wordInfo.related],
		(err, results, fields) => {
			callback(err, results, fields);
		}
	);
};

word.delete = (id, callback) => {
	connection.query(
		'DELETE FROM word WHERE id=?',
		id,
		(err, results, fields) => {
			callback(err, results, fields);
		}
	);
};

word.update = (wordInfo, id, callback) => {
	connection.query(
		'UPDATE word SET ? WHERE id=?',
		[wordInfo, id],
		(err, results, fields) => {
			callback(err, results, fields);
		}
	);
};

module.exports = word;
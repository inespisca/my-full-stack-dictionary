const connection = require('./config');

const dropWord = new Promise(
	(resolve, reject) => connection.query('DROP TABLE word', (err) => {
		if (err) reject(err);
		console.log('word table dropped');
		resolve();
	})
);


dropWord
	.then(() => 
		console.log('OK!')
	)
	.then(() => 
		connection.end()
	)
																			
	.catch(err => {
		console.log(err);
		connection.end();
	});
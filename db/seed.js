const connection = require('./config');

const insertWord = new Promise(
	(resolve, reject) => connection.query(`INSERT INTO word (name, definition, related) VALUES 
		('Apple', 'A round fruit with seeds at its center', 'mango, pear, guava'),
		('Baby', 'The young one of a human', 'child, toddler, teen'),
		('Car', 'Transports people from place to place', 'bus, bicycle, truck'),
		('Computer', 'An electronic device', 'laptop, tablet, palmtop'),
		('Mosquito', 'An insect', 'ant, beetle, butterfly')
    `, (err) => {
		if (err) reject(err);
		console.log('words have been inserted');
		resolve();
	})
);

insertWord
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
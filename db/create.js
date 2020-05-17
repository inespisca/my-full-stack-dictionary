const connection = require('./config');

connection.query(`CREATE TABLE word (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    definition VARCHAR(3000),
    related VARCHAR(255)
    )`,
(err) => {
	if (err) console.log(err);
    console.log('table word created');
    connection.end();
}
);

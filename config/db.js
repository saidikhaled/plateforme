//import mysql from 'mysql';

const knex = require('knex')({
	client     : 'mysql',
	connection : {
		host     : process.env.DB_HOST,
		user     : process.env.DB_USER,
		password : process.env.DB_PASSWORD,
		database : process.env.DB_NAME,
		charset  : 'utf8'
	},
	migrations : {
		directory : __dirname + '/migrations'
	},
	seeds      : {
		directory : __dirname + '/seeds'
	}
});

const bookshelf = require('bookshelf')(knex);

// create conncetion
// const db = mysql.createConnection({
// 	host     : process.env.DB_HOST,
// 	user     : process.env.DB_USER,
// 	password : process.env.DB_PASSWORD,
// 	database : process.env.DB_NAME
// });

export { knex, bookshelf };

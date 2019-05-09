// Update with your config settings.
module.exports = {
	development: {
		client: 'pg',
		version: '9.5',
		//connection: 'postgres://localhost/plateforme_db',
		connection: {
			host: 'localhost',
			user: 'khaled',
			password: 'khaled',
			database: 'plateforme_db',
			charset: 'utf8'
		},
		migrations: {
			directory: __dirname + '/config/db/migrations'
		},
		seeds: {
			directory: __dirname + '/config/db/seeds'
		}
	},
	production: {
		client: 'mysql',
		connection: 'postgres://localhost/plateforme_db',
		// connection: {
		// 	host: process.env.DB_HOST,
		// 	user: process.env.DB_USER,
		// 	password: process.env.DB_PASSWORD,
		// 	charset: 'utf8'
		// }, 	database: process.env.DB_NAME,

		migrations: {
			directory: __dirname + '/db/migrations'
		},
		seeds: {
			directory: __dirname + '/db/seeds/production'
		}
	}
};
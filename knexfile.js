// Update with your config settings.
module.exports = {
	development : {
		client     : 'mysql',
		connection : {
			host     : 'localhost',
			user     : 'khaled',
			password : 'Teenwolfs1',
			database : 'plateforme_db',
			charset  : 'utf8'
		},
		migrations : {
			directory : __dirname + '/config/db/migrations'
		},
		seeds      : {
			directory : __dirname + '/config/db/seeds'
		}
	},
	production  : {
		client     : 'mysql',
		connection : {
			host     : process.env.DB_HOST,
			user     : process.env.DB_USER,
			password : process.env.DB_PASSWORD,
			database : process.env.DB_NAME,
			charset  : 'utf8'
		},
		migrations : {
			directory : __dirname + '/db/migrations'
		},
		seeds      : {
			directory : __dirname + '/db/seeds/production'
		}
	}
};

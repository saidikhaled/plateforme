exports.up = function (knex, Promise) {
	return knex.schema
		.createTable('users', function (table) {
			table.increments('id');
			table.string('firstName').notNullable();
			table.string('lastName').notNullable();
			table.string('userName').notNullable();
			table.string('email').notNullable();
			table.string('password').notNullable();
			table.timestamp('regester_at').defaultTo(knex.fn.now());
		})
		.then(() => {
			return createTable('etablissements', function (table) {
				table.increments('etablissement_id');
				table.string('Name').notNullable();
				table.string('region').notNullable();
				table.string('ville').notNullable();
				table.string('commune');
				table.string('address').notNullable();
			});
		})
		.then(() => {
			return createTable('enseignants', function (table) {
				table.increments('enseignant_id');
				table.integer('etablissement_id').references('etablissement_id').inTable('etablissements');
				table.integer('user_id').references('user_id').inTable('users');
			});
		})
		.then(() => {
			return createTable('directeurs', function (table) {
				table.increments('directeur_id');
				table.integer('etablissement_id').references('etablissement_id').inTable('etablissements');
				table.integer('user_id').references('user_id').inTable('users');
			});
		});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTable('enseignants').dropTable('etablissement').dropTable('users');
};

exports.up = function (knex, Promise) {
	return knex.schema.createTable('directeurs', function (table) {
		table.increments('directeur_id');
		table.integer('etablissement_id').references('etablissement_id').inTable('etablissements');
		table.integer('user_id').references('user_id').inTable('users');
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTable('directeurs');
};

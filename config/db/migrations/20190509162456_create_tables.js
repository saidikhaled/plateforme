exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', function (table) {
            table.increments('id').primary();
            table.string('firstName').notNullable();
            table.string('lastName').notNullable();
            table.string('userName').notNullable();
            table.string('email').notNullable();
            table.string('password').notNullable();
            table.timestamp('regester_at').defaultTo(knex.fn.now());
        })
        .createTable('etablissements', function (table) {
            table.increments('etablissement_id').primary();
            table.string('Name').notNullable();
            table.string('region').notNullable();
            table.string('ville').notNullable();
            table.string('commune');
            table.string('address').notNullable();
        })
        .createTable('enseignants', function (table) {
            table.increments('enseignant_id').primary();
            table.integer('etablissement_id').references('etablissement_id').inTable('etablissements');
            table.integer('user_id').references('id').inTable('users');
        })
        .createTable('directeurs', function (table) {
            table.increments('directeur_id').primary();
            table.integer('etablissement_id').references('etablissement_id').inTable('etablissements');
            table.integer('user_id').references('id').inTable('users');
        }).then()

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('directeurs').dropTable('enseignants').dropTable('etablissement').dropTable('users');
};
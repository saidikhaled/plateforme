exports.seed = function (knex, Promise) {
	// Deletes ALL existing entries
	return knex('directeurs').del().then(function () {
		// Inserts seed entries
		return knex('directeurs').insert([
			{ directeur_id: 1, etablissement_id: 1, user_id: 1 },
			{ directeur_id: 2, etablissement_id: 2, user_id: 2 }
		]);
	});
};

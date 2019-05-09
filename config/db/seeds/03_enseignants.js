exports.seed = function (knex, Promise) {
	// Deletes ALL existing entries
	return knex('enseignants').del().then(function () {
		// Inserts seed entries
		return knex('enseignants').insert([{
				enseignant_id: 1,
				etablissement_id: 1,
				user_id: 1
			},
			{
				enseignant_id: 2,
				etablissement_id: 1,
				user_id: 2
			}
		]);
	});
};
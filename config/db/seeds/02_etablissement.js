exports.seed = function (knex, Promise) {
	// Deletes ALL existing entries
	return knex('etablissements').del().then(function () {
		// Inserts seed entries
		return knex('etablissements').insert([{
				etablissement_id: 1,
				Name: '20 Aout',
				region: 'ouest',
				ville: 'oran',
				address: 'bel air'
			},
			{
				etablissement_id: 2,
				Name: 'boomedienne',
				region: 'ouest',
				ville: 'oran',
				address: 'canastel'
			}
		]);
	});
};
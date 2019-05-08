exports.seed = function (knex, Promise) {
	// Deletes ALL existing entries
	return knex('users').del().then(function () {
		// Inserts seed entries
		return knex('users').insert([
			{
				id        : 1,
				firstName : 'khaled',
				lastName  : 'saidi',
				userName  : 'kay',
				email     : 'khaledsaidi@gmail.com',
				password  : '123123'
			},
			{
				id        : 2,
				firstName : 'lynda',
				lastName  : 'korso',
				userName  : 'lyn',
				email     : 'lyndakorso@gmail.com',
				password  : '123123'
			},
			{
				id        : 3,
				firstName : 'hichem',
				lastName  : 'bougrba',
				userName  : 'hich',
				email     : 'hichembougrba@gmail.com',
				password  : '123123'
			}
		]);
	});
};

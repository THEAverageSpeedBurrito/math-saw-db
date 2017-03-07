
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('components').del()
    .then(function () {
      // Inserts seed entries
      return knex('components').insert([
        {
          id: 1,
          project: 1,
          name: 'new component',
          length: 10,
          width: 20
        },
      ]);
    });
};

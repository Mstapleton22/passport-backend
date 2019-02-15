
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('traveler').del()
    .then(function () {
      // Inserts seed entries
      return knex('traveler').insert([
        { id: 1, first_name: 'Michael', last_name: 'Stapleton', nationality: 'American' },
        { id: 2, first_name: 'Zeke', last_name: 'Cyr', nationality: 'Italian' },
        { id: 3, first_name: 'Diane', last_name: 'Franco-Yaun', nationality: 'Holland' }
      ]);
    });
};

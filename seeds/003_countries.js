
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert([
        { id: 1, country_name: 'Morocco', language: 'Darijan (Maghrebi Arabic language)' },
        { id: 2, country_name: 'Korea', language: 'Korean' },
        { id: 3, country_name: 'Peru', language: 'Spanish' },
        { id: 4, country_name: 'Bali', language: 'Balinese' },
        { id: 5, country_name: 'Scicily', language: 'Scicilian' },
        { id: 6, country_name: 'Corsica', language: 'French' },
        { id: 7, country_name: 'Greece', language: 'Greek' },
        { id: 8, country_name: 'Japan', language: 'Japanese' },
        { id: 9, country_name: 'Brazil', language: 'Portuguese' },
      ]);
    });
};

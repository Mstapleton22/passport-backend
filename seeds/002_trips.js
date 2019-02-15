
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        { id: 1, traveler_id: '1', country_id: '1', description: 'Today we went to the souks and bought some moroccan spices.' },
        { id: 2, traveler_id: '1', country_id: '2', description: 'We enjoyed the architecture and I was wowed by the advanced technology!' },
        { id: 3, traveler_id: '1', country_id: '3', description: 'The food was amazing, I love the white city of Arequipa!' },
        { id: 4, traveler_id: '2', country_id: '4', description: 'Yoga every day! The jungle around us was quite calming' },
        { id: 5, traveler_id: '2', country_id: '5', description: 'Scicily, arguably more cultured than italy!' },
        { id: 6, traveler_id: '2', country_id: '6', description: 'I had not idea their dialect was so close to italian!' },
        { id: 7, traveler_id: '3', country_id: '7', description: 'The cheese and the boys were so tastey!' },
        { id: 8, traveler_id: '3', country_id: '8', description: 'Japan is literally lit (up). All of the anime inspiration was super cool' },
        { id: 9, traveler_id: '3', country_id: '9', description: 'Carnival gave party a new meaning' },
      ]);
    });
};

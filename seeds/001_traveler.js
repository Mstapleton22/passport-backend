
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('traveler').del()
    .then(function () {
      // Inserts seed entries
      return knex('traveler').insert([
        {
          id: 1,
          picture: "https://media.licdn.com/dms/image/C4E03AQECDmAPXys1ng/profile-displayphoto-shrink_200_200/0?e=1556755200&v=beta&t=Emp-2vXmx4PXedWSzGJN_FgFcVxz5RjsTTvt2P-N6uw",
          first_name: 'Michael',
          last_name: 'Stapleton',
          nationality: 'American'
        },
        {
          id: 2,
          picture: "https://media.licdn.com/dms/image/C4D03AQGstaeuaivEaA/profile-displayphoto-shrink_800_800/0?e=1556755200&v=beta&t=K75NyhIE8HM04W8SHZTOMeRgkwumUCXRjWIkvhPQSac",
          first_name: 'Zeke',
          last_name: 'Cyr',
          nationality: 'Italian'
        },
        {
          id: 3,
          picture: "https://media.licdn.com/dms/image/C5603AQF8_1EEZ7v0aA/profile-displayphoto-shrink_800_800/0?e=1556755200&v=beta&t=vKqsviQWaHkzk3Rv6i7m4xWcFyi2YdervpJu7tBA2ss",
          first_name: 'Diane',
          last_name: 'Franco-Yaun',
          nationality: 'Holland'
        }
      ]);
    });
};

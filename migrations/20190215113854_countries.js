exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('traveler', table => {
      table.increments('id')
      table.string('first_name').notNullable().defaultsTo('')
      table.string('last_name').notNullable().defaultsTo('')
      table.string('nationality').notNullable().defaultsTo('')
    }),
    knex.schema.createTable('trips', table => {
      table.increments('id')
      table.integer('traveler_id').notNullable().defaultsTo(0)
      table.integer('country_id').notNullable().defaultsTo(0)
      table.string('description').notNullable().defaultsTo('')
    }),
    knex.schema.createTable('countries', table => {
      table.increments('id')
      table.string('country_name').notNullable().defaultsTo('')
      table.string('language').notNullable().defaultsTo('')
    })
  ])
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('traveler'),
    knex.schema.dropTable('trips'),
    knex.schema.dropTable('countries'),
  ])
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//Create database to phpMyadmin
//cd database
// npm init
// npm install knex --save
// Aja knex-init, joka luo konffaustiedoston knexfile.js.
// nimeä tietokanta “citybike_db” ja paina enter-muihin kohtiin.
// npx knex init
// RUN migrates to database: npx knex migrate:latest
// RUN seeds: npx knex seed:run


exports.up = function(knex) {
    return knex.schema
    .createTable('stations', t => {
        t.increments('id').primary()
        t.string('name').notNullable()
        t.string('address').notNullable()
        t.string('city').notNullable()
        t.string('operator').notNullable()
        t.integer('capacity').notNullable()
    })
    .createTable('journeys', t => {
        t.increments('id').primary()
        t.dateTime('departure').notNullable()
        t.dateTime('return').notNullable()
        t.integer('d_station_id').unsigned()
        t.foreign('d_station_id').references("stations.id");
        // t.string('d_station_name')
        // t.foreign('d_station_name').references("stations.name")
        t.integer('r_station_id').unsigned()
        t.foreign('r_station_id').references('stations.id')
        // t.string('r_station_name')
        // t.foreign('r_station_name').references("stations.name")
        t.decimal('distance').notNullable()
        t.integer('duration').notNullable();
    })
  };
  
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('stations')
    .dropTableIfExists('journeys')
  };


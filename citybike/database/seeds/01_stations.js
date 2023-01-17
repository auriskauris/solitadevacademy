/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stations').del()
    .then(function () {
      // Inserts seed entries
      return knex('stations').insert([
        {id: 1, name: 'Hanasaari', address: "Hanasaarenranta 1", city: "Espoo", operator: "CityBike Finland", capacity: "10"},
        {id: 2, name: 'Keilalahti', address: "Keilalahdentie 2", city: "Espoo", operator: "CityBike Finland", capacity: "28"},
        {id: 3, name: 'Golfpolku', address: "Golfpolku 3", city: "Espoo", operator: "CityBike Finland", capacity: "16"},
      ]);
    });
};
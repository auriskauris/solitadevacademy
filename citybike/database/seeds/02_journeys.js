/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('journeys').del()
    .then(function () {
      // Inserts seed entries
      return knex('journeys').insert([
        {id: 1, departure: '2021-05-31T23:57:25', return: "2021-06-01T00:05:46", d_station_id: "1", r_station_id: "2", distance: "2043", duration: "500"},
        {id: 2, departure: '2021-05-31T23:56:59', return: "2021-06-01T00:07:14", d_station_id: "2", r_station_id: "3", distance: "1870", duration: "611"},
        {id: 3, departure: '2021-05-31T23:46:14', return: "2021-05-31T23:55:58", d_station_id: "3", r_station_id: "1", distance: "2550", duration: "1377"},
      ]);
    });
};
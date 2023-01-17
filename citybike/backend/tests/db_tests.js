const options = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'mypass123',
        database: 'citybike_db'
    }
}

const knex = require('knex')(options);

knex.on('query', console.log);  // SQL-muoto

knex('stations').select("*")
    .then((rows) => {
        console.log("starting data");
        console.log(rows);
    })
    .catch((err) => {
        console.log(err); 
        throw err 
    })
    .finally(() => {
        console.log("close database connection")
        knex.destroy();
    });
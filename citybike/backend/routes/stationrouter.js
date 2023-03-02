var express = require('express');
var router = express.Router();

const config = require('../utils/config');
const options = config.DATABASE_OPTIONS;
const knex = require('knex')(options);

/* GET stations' listing. */
router.get('/', function(req, res, next) {
  
  knex('stations').select('*')
  .then((rows) => {
      console.log(rows);
      res.json(rows);
  })
  .catch(error => {
    console.log("ErrorStationsRouter", error)
    res.status(500).res.json(error);
  })
});

module.exports = router;
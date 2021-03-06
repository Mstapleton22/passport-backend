const express = require('express')
const app = express()
const environment = process.env.NODE_ENV || 'development'
const knexConfig = require('./knexfile.js')[environment]
const knex = require('knex')(knexConfig)
const port = process.env.PORT || 3001
const bodyParser = require('body-parser')
const cors = require('cors')

// const url = process.env.URL

app.use(bodyParser.json())
app.use(cors())

app.listen(port, () => console.log(`app listening on port ${port}!`))

app.get('/trips', (req, res, next) => {
  knex('trips')
    .then((rows) => res.send(rows))
    .catch((err) => next(err))
})

app.get('/traveler', (req, res, next) => {
  knex('traveler')
    .then((rows) => res.send(rows))
    .catch((err) => next(err))
})

app.get('/countries', (req, res, next) => {
  knex('countries')
    .then((rows) => res.send(rows))
    .catch((err) => next(err))
})

app.get('/travelerTrips/:id', (req, res, next) => {
  knex('trips')
    .join('countries', 'countries.id', 'trips.country_id')
    .join('traveler', 'traveler.id', 'trips.traveler_id')
    .where('traveler.id', req.params.id)
    .then((rows) => res.send(rows))
    .catch((err) => next(err))
})

app.get('/traveler/:id', (req, res, next) => {
  knex('traveler')
    .where('traveler.id', req.params.id)
    .then(travelers => {
      const user = travelers.map(traveler => {
        return knex('trips')
          .join('countries', 'countries.id', 'trips.country_id')
          .where({ traveler_id: traveler.id })
          .then(trips => {
            traveler.trips = trips
            return traveler
          })
      })
      return Promise.all(user)
    })
    .then((rows) => res.send(rows))
    .catch((err) => next(err))
})

app.patch('/trips/:id', (req, res, next) => {
  knex('trips').update(req.body).where('id', req.params.id).returning('*')
    .then((rows) => {
      res.send(rows)
    })
    .catch((err) => {
      next(err);
    });
})

app.post('/trips', (req, res, next) => {
  knex('trips').insert(req.body)
    .then((rows) => {
      res.send('created a trip')
    })
    .catch((err) => {
      next(err)
    })
})

app.post('/countries', (req, res, next) => {
  knex('countries').insert(req.body)
    .then((rows) => {
      res.send('created a trip')
    })
    .catch((err) => {
      next(err)
    })
})

app.delete('/trips/:id', (req, res, next) => {
  knex('trips').where({ 'id': req.params.id })
    .del(req.body)
    .then((trips) => {
      res.send('trip deleted')
    })
    .catch((err) => {
      next(err)
    })
})

app.use((req, res, next) => {
  res.status(404).send("404, path not found.")
})

app.use((req, res, next) => {
  res.status(500).send("500, server error.")
})
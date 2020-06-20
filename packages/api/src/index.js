const express = require('express')
const R = require('ramda')
const Bluebird = require('bluebird')
const fs = Bluebird.promisifyAll(require('fs'))
const path = require('path')
const cors = require('cors')

const PORT = 8000
const DELAY = 200

const app = express()

app.use(cors({ origin: '*' }))

const buildPath = filename => path.join(path.dirname(__filename), filename)
const countersDb = buildPath('/counters.json')

// ====================================
// utils
// ====================================

// ------------------------------------
// utils : get by id
// ------------------------------------

const findAll = (filePath) => fs
  .readFileAsync(filePath, 'utf8')
  .delay(DELAY)
  .then(x => JSON.parse(x))

const findById = (filePath, id) => fs
  .readFileAsync(filePath, 'utf8')
  .delay(DELAY)
  .then(x => JSON.parse(x))
  .then(R.find(R.propEq('id', id)))

// ====================================
// API
// ====================================

const buildResponse = (res, id, data) => {
  // ... not found
  if (R.isNil(data)) {
    return res.status(404).send('Not found')
  }

  // ... success
  return res.json(data)
}

// ------------------------------------
// /users
// ------------------------------------

app.get('/counters', async (req, res) => {
  const data = await findAll(countersDb)
  return res.json(data)
})

// ------------------------------------
// /wallets/:id
// ------------------------------------

app.get('/counters/:id', async (req, res) => {
  const id = R.compose(x => parseInt(x), R.path(['params', 'id']))(req)
  const data = await findById(countersDb, id)
  return buildResponse(res, id, data)
})

// ------------------------------------
// API
// ------------------------------------

app.listen(PORT, () => console.log(`API : listening on port http://localhost:${PORT}`))

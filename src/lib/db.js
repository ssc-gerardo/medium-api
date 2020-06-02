
const mongoose = require('mongoose')

const user = 'gerardo_ssc'
const password = '13031992Cabelludo'
const host = 'cluster0-cqvji.mongodb.net'
const dbName = 'medium'
const url = `mongodb+srv://${user}:${password}@${host}/${dbName}?retryWrites=true&w=majority`

function connect () {
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
}

module.exports = {
  connect
}

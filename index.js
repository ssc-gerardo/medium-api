const server = require('./src/server')
const db = require('./src/lib/db')

async function main () {
  await db.connect()
  console.log('- DB CONNECTED -')
  server.listen(8083, () => {
    console.log('server is running')
  })
}

main()
  .then(() => {
    console.log('server ready')
  })
  .catch(error => { console.error('ERROR: ', error) })

server.listen((8081), () => {
  console.log('server is running')
})

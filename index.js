const proxy = require('express-http-proxy');
const app = require('express')();

const PORT = Number(process.env.PORT) || 8080
const HOST = '0.0.0.0'

app.use('/', proxy('http://geohelper.info'));

app.listen(PORT, HOST, () => {
  console.log(`App is online on http://${HOST}:${PORT}`)
})
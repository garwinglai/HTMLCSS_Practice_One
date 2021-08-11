const express = require('express')
const path = require('path')

const app = express();

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile('/index.html', { root: __dirname })
})

app.listen(3000, (req, res) => {
  console.log('listening on port 3000')
})
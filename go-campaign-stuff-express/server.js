const express = require('express')

let app = express()

app.get('/', (req, res) => res.send('HELLO FROM EXPRESS'));

app.use(express.static('public'))

app.listen(3000, () => console.log('Go-Campaign-Stuff-Express listening on port 3000!'));
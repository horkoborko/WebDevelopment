const express = require('express')
const logger = require('morgan')
const path = require('path')
const server = express()
server.use(express.urlencoded({'extended': true}))
server.use(logger('dev'))

// Routes
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`)
})

server.post('/cs212/homework/8.html', (req, res) => {
  response_string = 'Welcome to ' + req.body['1stnounsin'] +
                    ' University! Here, we offer many ' + req.body['1stadjective'] +
                    ' courses, from art history to zoology! Some of our best on-campus ammenities include a ' + req.body['2ndnounsin'] +
                    ', our state-of-the-art ' + req.body['1stnounplu'] +
                    ', and of course, our yearly ' + req.body['3rdnounsin'] +
                    ' festival! We hope that your Summer was ' + req.body['2nsadjective'] +
                    ' and we are so excited for your arrival in August! Go ' + req.body['2ndnounplu'] + '!';
  res.send(response_string);
})


// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))


// The server uses port 80 by default unless you start it with the extra
// command line argument 'local' like this:
//       node server.js local
let port = 80
if (process.argv[2] === 'local') {
  port = 8080
}

server.listen(port, () => console.log('Ready on localhost!'))

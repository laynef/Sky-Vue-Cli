const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const parser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes')
const cors = require('cors')
const config = require('../config')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const flash = require('express-flash')
const session = require('express-session')
const fs = require('fs')

// port settings
let port = process.env.PORT || 5000

// web socket protocol on localhost on port 4200
server.listen(port, () => {
    console.log(`Listen to http://localhost:${port}`)
})

// Middleware
// Body Parser, Morgan, and Public Compiled folder
app.use(express.static('public'))
app.use(cors())
app.use(morgan('dev'))
app.use(parser.urlencoded({ extended: true}))
app.use(parser.json())
app.use(cookieParser())

// database connection
mongoose.connect(config.mongo)
const db = mongoose.connection
db.once('open', () => {
  console.log('connected to database')
})

// Render the index.html
app.get('/', (req, res) => { 
    res.sendFile('index.html') 
})

app.get('*', (req, res) => {
    res.redirect('/')
})

app.use('/api', routes) // when you add api routes in routes.js

// Web socket on connection 
io.on('connection', (socket) => {
    setTimeout(() => {
        fs.watch(__dirname + '/../', {recursive: true}, (e, o) => {
            if (e === 'rename' || e === 'change') {
                socket.emit('save')
            }
        })
    }, 1000)
})
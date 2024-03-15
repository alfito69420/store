const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.CONN_STRING_MONGOOSE)
//mongoose.connect('mongodb+srv://alfito:xqoyTzOHqCCAcpv8@cluster0.wdpzzmg.mongodb.net/store')

const connectionObj = mongoose.connection

connectionObj.on('connected', ()=> {
    console.log('MongoDB connection successful')
})

connectionObj.on('error', ()=> {
    console.log('MongoDB connection failed...')
})
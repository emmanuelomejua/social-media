'use strict';

require('dotenv').config()

const {log, error} = require('console')
const mongoose = require('mongoose');
const {set, connect, connection, on} = mongoose

const db_url = process.env.DB_URI 

//DB set-up
set('strictQuery', true)

connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> log('DB connection successful'))
.catch((error)=> log(error.message))

connection.on('Disconnected', ()=> {
    error(error.message)
})
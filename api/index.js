require('dotenv').config()

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet')
const {log, error} = require('console')

const app = express();

const { json, urlencoded } = express;

//import routes
const usersRoute = require('./routes/usersRoute');
const authRoute = require('./routes/authRoute');
const postRoute = require('./routes/postRoute')


//connect to DB
const connectDB = require('./config/db')

//middlewares
app.use(json());
app.use(helmet());
app.use(morgan('common'))
app.use(urlencoded({ extended: false }))

//cross origin resource
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-type', 'Authorization']
}))

//routes uses
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);
app.use('/api/post', postRoute);



//bind with express server
const port = process.env.PORT

app.listen(port, err=> {
    !err ? log(`Server active at port ${port}`) : error(err.message)
})

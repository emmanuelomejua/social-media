require('dotenv').config()

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet')
const {log, error} = require('console');
const multer = require('multer');
const path = require('path');

//bind with express server
const app = express();

const { json, urlencoded } = express;

//import routes
const { usersRoute, authRoute, postRoute, chatRoute, msgRoute } = require('./routes');


//connect to DB
require('./config/db')

app.use('/images', express.static(path.join(__dirname, 'public/images')))
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

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        const filename = req.body.name || file.originalname;
        cb(null, filename);
    }
})

const upload = multer({storage});


app.post('/api/upload', upload.single('file'), async (req, res) => {
    console.log(req.upload)
    try {
        return res.status(200).json('File uploaded successfully!')
    } catch (error) {
        res.status(500).json(error.message);
    }
})


//routes uses
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);
app.use('/api/post', postRoute);
app.use('/api/chat', chatRoute)
app.use('/api/msg', msgRoute)


const port = process.env.PORT

app.listen(port, err=> {
    !err ? log(`Server active at port ${port}`) : error(err.message)
})



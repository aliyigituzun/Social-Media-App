const express = require('express');
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon');
const expressSession = require('express-session')

const app = express();
const port = 3000;

const indexRouteController = require('./routes/indexRoutes.js')
const authRouteController = require('./routes/authRoutes.js')
const streamRouteController = require('./routes/streamRoutes.js')


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');
app.use(favicon(path.join(__dirname, "public", "images/favicon.ico")));
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

const session = expressSession({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  });


app.use(session);
app.use(express.json());
app.use('/', indexRouteController);
app.use('/auth', authRouteController);
app.use('/stream', streamRouteController);


mongoUri = "mongodb://127.0.0.1:27017/task-manager";
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true});

app.listen(port, () => {
    console.log('Server is running on port 3000')
})








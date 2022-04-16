const path = require('path')
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const connectDB = require('./config/db');
const passport = require('passport');
const session = require('express-session');

// Load Config

dotenv.config({path: './config/config.env'});

//passport config
require('./config/passport')(passport)

connectDB();

const app = express()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//Handlebars

app.engine('.hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Passport middleware

app.use(passport.initialize())
app.use(passport.session())


app.use(express.static(path.join(__dirname,'public')))

// Routes

app.use('/',require('./routes/index'))

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server is running on the ${process.env.NODE_ENV} mode on  port ${PORT}`));
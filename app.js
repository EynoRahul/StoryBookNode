const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const connectDB = require('./config/db');

// Load Config

dotenv.config({path: './config/config.env'});

connectDB();

const app = express()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//Handlebars

app.engine('.hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Routes

app.use('/',require('./routes/index'))

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server is running on the ${process.env.NODE_ENV} mode on  port ${PORT}`));
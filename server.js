const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true})) 

app.use(bodyParser.json())

// configuraing the database

const dbConfig = require('./config/database.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


//connecting the database

mongoose.connect(dbConfig.url,{
    useNewUrlParser:true
}).then(() =>{
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could Not connected to the database.Exiting now..',err);
    process.exit();
});

// require Notes routes

require('./routes/route.js')(app);


// listen for request

app.listen(7000,() => {
    console.log('server starting in 7000 port');
});
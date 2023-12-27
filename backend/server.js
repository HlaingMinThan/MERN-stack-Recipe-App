const express = require('express');
require('dotenv').config()
const morgan = require('morgan')
const recipesRoutes = require('./routes/recipes');
const mongoose = require('mongoose');

const app = express();
const mongoURL = "mongodb+srv://hlaingminthan:test1234@mern-cluster.cut3lbf.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoURL).then(() => {
    console.log('connected to db');
    app.listen(process.env.PORT,() => {
        console.log('app is running on localhost:'+process.env.PORT);
    })
});

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req,res) => {
    return res.json({hello : 'world'});
});

app.use('/api/recipes',recipesRoutes)
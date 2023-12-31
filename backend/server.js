const express = require('express');
require('dotenv').config()
const morgan = require('morgan')
const app = express();

app.use(morgan('dev'))

app.get('/', (req,res) => {
    return res.json({hello : 'world'});
});

app.listen(process.env.PORT,() => {
    console.log('app is running on localhost:'+process.env.PORT);
})
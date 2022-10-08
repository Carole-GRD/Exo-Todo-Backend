
require('dotenv-flow').config();

const { NODE_ENV, MESSAGE, PORT, DB_CONNECTION } = process.env; 
console.log('Lancé en', NODE_ENV, ':', MESSAGE);

const mongoose = require('mongoose');

const express = require('express');
const app = express();

require('express-async-errors');

const cors = require('cors');
app.use(cors());

const router = require('./routes');

app.use(express.json());

// app.get('/list', (req, res) => {
//     // console.log(req.url);
//     const data = {
//         msg : 'Ma todo liste'
//     };
//     res.json(data);
// });

app.use( async (req, res, next) => {
    await mongoose.connect(DB_CONNECTION);
    console.log('Connection réussie !');
    next();
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server up on port : ${PORT} [${NODE_ENV}]`);
});



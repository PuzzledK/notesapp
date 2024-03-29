/* eslint-disable no-unused-vars */
const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors')

connectToMongo();

const app = express()
const port = 80

app.use(express.json());
app.use(cors());

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port,()=>{
    console.log(`Backend Listening on http://localhost:${port}`)
})
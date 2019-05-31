require('dotenv').config();
const express = require('express');

const server = express();

server.get('/', (req,res) => {
    res.send('sanity check');
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
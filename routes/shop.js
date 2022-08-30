const path = require('path');
const express = require('express')

const route = express.Router();

route.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = route;
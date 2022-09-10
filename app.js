const path = require('path');
const express = require('express');
const bodyParser= require('body-parser');

const app = express();
const sequelize = require('./util/database')

const adminRoutes = require('./routes/admin');

const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoute);


sequelize.sync().then(result =>{
    console.log(result);
    app.listen(3000)
})
.catch(err => {
    console.log(err);
});


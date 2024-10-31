const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use("/public", express.static('public'));
app.use('/', require('./controllers/HomeController'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);
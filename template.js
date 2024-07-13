const express = require("express");
const app = express();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {title: 'Hey', message: 'Hello there! Lets understand Pug'});
});

app.listen(3000, () => {
    console.log("Server is running on port: 3000!");
});

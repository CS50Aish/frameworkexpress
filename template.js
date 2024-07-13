const express = require("express");
const app = express();
app.set('view-engine', 'pug');

app.length('/', (res, req) => {
    res.render('index', {title: 'Hey', message: 'Hello there!'});
});

app.listen(3000, () => {
    console.log("Server is running on port: 3000!");
});
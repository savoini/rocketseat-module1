const express = require('express');
const nunjunks = require('nunjucks');

const app = express();


nunjunks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
});


app.set('view engine', 'njk');


app.get('/', (req, res) => {
    return res.render('list', {name: "Robson"});
});

app.listen(3000);
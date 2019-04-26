const express = require('express');
const nunjunks = require('nunjucks');

const app = express();


nunjunks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
});


app.set('view engine', 'njk');


const users = ['Gilberto R.', 'Diego Fernandes', 'Robson Marques'];


app.get('/', (req, res) => {
    return res.render('list', {users});
});


app.get('/new', (req, res) => {
    return res.render('new');
})


app.listen(3000);
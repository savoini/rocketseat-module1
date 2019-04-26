const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send(`Welcome, ${req.query.name}`);
});


app.get('/login', (req, res) => {
    return res.send("Login");
});


app.get('/nome/:name', (req, res) => {
    return res.send(`Welcome, ${req.params.name}`);
});

app.get('/json/:name', (req, res) => {
    return res.json({
        message: `Welcome, ${req.params.name}`
    });
});


app.listen(3000);
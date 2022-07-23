const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, './public');

app.use(express.static(publicPath));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
});
app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, './views/contacto.html'))
});
app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, './views/faq.html'))
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
});
app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/registro.html'))
});

app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, './views/carrito.html'))
});

app.get('/product-detail', (req, res) => {
    res.sendFile(path.join(__dirname, './views/product-detail.html'))
});


app.listen(3000, () =>
console.log('http://localhost:3000'));

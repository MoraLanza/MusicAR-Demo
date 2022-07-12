const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, './public');

app.use(express.static(publicPath));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/product-detail.html'))
});

app.listen(3000, () =>
console.log('http://localhost:3000'));

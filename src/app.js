const express = require('express');
const app = express();
const path = require('path');


const mainRouter = require('./routes/mainRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');


app.use(express.static('./public'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.use('/', mainRouter);

app.use('/products', productRouter);

app.use('/users', userRouter);



app.listen(3000, () =>
console.log('http://localhost:3000'));

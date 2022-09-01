const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');

const mainRouter = require('./routes/mainRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

const app = express();
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')



app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'secreto de estado',
    resave: false,
    saveUninitialized: false,
}));
app.use(userLoggedMiddleware);

app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(cookies());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.use('/', mainRouter);

app.use('/products', productRouter);

app.use('/users', userRouter);



app.listen(3000, () =>
console.log('http://localhost:3000'));

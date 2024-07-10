const express = require('express');
const dotenv = require('dotenv');
const apiRouter = require('./routes/api');
const ssrRouter = require('./routes/ssr');
const authenticateUser = require('./middlewares/auth');
const path = require('path');
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));
app.use(express.static('static'));

app.use('/api',apiRouter);
app.use('/',ssrRouter);


app.listen(PORT,()=>{
    console.log(`Server listening PORT:${PORT}`);
});
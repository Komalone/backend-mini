const express= require('express');
const bodyParser= require('body-parser');
const loginuser=require('./login');
const msg=require('./msg');

const app=express();
app.use(bodyParser.urlencoded({extended: false}));

app.use(loginuser);
app.use(msg);

app.use((req, res, next)=>{
    res.status(404).send('<h1>Page not Found</h1>')
})

app.listen(3000);
const express= require('express');

const route= express.Router();

route.get('/login', (req, res, next)=>{
    res.send(
        `<form action="/login" onsubmit="localStorage.setItem('username', document.getElementById(\'username\').value)" method="POST">
        <input type="text" id="username" name="name"/><br/>
        <button type="submit">LOGIN</button>
        </form>`)
});

route.post('/login', (req, res, next)=>{
    //console.log(req);
    res.redirect('/');
})

module.exports= route;
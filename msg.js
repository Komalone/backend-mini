const express= require('express');

const router= express.Router();

let data=[];

router.get('/', (req, res, next)=>{
    res.send(`<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"
            method="POST">${data}<br/>
            <input type="text" id="msg" name="massage" placeholder="Write message"/>
            <input type="hidden" name="username" id="username"/><br/>
            <button type="submit"> Send</button>
            </form>`)
});

router.post('/', (req, res, next)=>{
    data.push(`${req.body.username} : ${req.body.massage}`)
    console.log(data);

    res.redirect('/');
});

module.exports= router;
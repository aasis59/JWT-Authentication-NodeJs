console.log("hello");
const express = require('express');
const  jwt = require('jsonwebtoken')
const app = express();
const posts =[
    {
        username:"kyle",
        title:'Post 1'
    },
    {
        username:"jim",
        title:'Post 2'
    }

]
app.get('/posts',(req,res)=>{
    res.json(posts);

})
app.get('/login',(req,res)=>{
const username = req.body.username
const user = {name: username}
jwt.sign()
})
app.listen(3000, () => {
    console.log("Wellcome to server.js");
})
require('dotenv').config();
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const posts = [
  {
    username: "kyle",
    title: "Post 1",
  },
  {
    username: "jim",
    title: "Post 2",
  },
];
function authenticationToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader?.split(' ')[1];
    if(token == null) return res.sendStatus(401)
    jwt.verify(token,process.env.ACCESS_TOKEN_SECERT,(err, user)=>{
if(err)return res.sendStatus(403)
req.user = user
next()
})
}
app.use(express.json());
app.get("/posts", authenticationToken,(req, res) => {
  
    res.json(posts.filter(post => post.username === req.user.name));
});
app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };
   const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECERT);
   res.json({ token:accessToken})
});

app.listen(3000, () => {
  console.log("Wellcome to server.js");
});

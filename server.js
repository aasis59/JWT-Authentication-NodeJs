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
app.use(express.json());

app.get("/posts", (req, res) => {
  res.json(posts);
});
app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };
   const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECERT);
   res.json({accessToken:accessToken})
});
app.listen(3000, () => {
  console.log("Wellcome to server.js");
});

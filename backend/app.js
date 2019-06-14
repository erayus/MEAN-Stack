//npm install --save-dev nodemon to auto restart server when changes are made
const express = require('express'); //npm install --save express
const bodyParser = require('body-parser'); //npm install --save body-parser
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next()
})

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  })
})


app.get('/api/posts',(req, res, next)=> {
  const posts = [
    {
      id: '2324234',
      title: 'This is the first dummy post',
      content: 'This is the content of the first dummy post'
    },
    {
      id: '54366532',
      title: 'This is the second dummy post',
      content: 'This is the content of the second dummy post'
    }
  ]
  res.status(200).json({
    message: 'Post fetched successfully',
    posts: posts
  });
})

module.exports = app;

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const PORT = 3000;
const app = express();

app.use(compression())
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
  res.json([
    {"id": 1, "firstName": "Anurag", "lastName": "Yadav", "email": "anuragyadav13481@gmail.com"},
    {"id": 2, "firstName": "darkmoon", "lastName": "juster", "email": "anufz00@gmail.com"},
    {"id": 3, "firstName": "Shivam", "lastName": "Verma", "email": "shivam@gmail.com"}
  ]);
});

app.listen(PORT, function(err){
  if(err){
    console.log('err');
  }
  else{
    open('http://localhost:' + PORT);
  }
});

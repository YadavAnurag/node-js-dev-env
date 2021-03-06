import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';



const PORT = 3000;
const app = express();
const compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
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

const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const fibonacci = require("../controllers/fibonacci");


app.use(express.static(__dirname + '/public/'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.listen('8080', function() {
  console.log('servidor en el puerto 8080');
});

app.post("/serie-fibo-n",function(req, res){
  let estatus = true;
  if(req.body.n > 0){
    var resultado = fibonacci.serieFib(req.body.n);
  }else{
    estatus = false;
    resultado = 0;
  }
  res.send({
    estatus: estatus,
    resultado: resultado
  });
});
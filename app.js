const express = require('express') //importacao do pacote
const app = express() //instanciando express
app.get('/', function (req, res) { //endereco da requisicao onde e retornado hello world
  res.send('./main/index.html')
})
app.listen(3000)
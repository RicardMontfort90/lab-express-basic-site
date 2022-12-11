const express = require ('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
    // __dirname es una variable de entorno
    res.status(200).sendFile(__dirname + '/views/home.html')
  })

  app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html')
  })
  
  


app.listen(3000, () => {
    console.log("hello world")
})
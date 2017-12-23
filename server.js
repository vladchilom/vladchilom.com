'use strict'

let fs = require('fs')
let path = require('path')
let express = require('express')
let app = express()

app.use('/public', express.static(__dirname + '/public'));

app.get('/resume', function(request, response){
  fs.readFile('public/Vlad\ Chilom.pdf', function (err,data){
     response.contentType("application/pdf");
     response.send(data);
  });
});

app.get('/', (req, res) => {
	res.sendFile(path.resolve('index.html'))
})

let server = app.listen(8081)

var express = require('express');
var path = require('path');
var app = express();


app.get('/listen', function(request, response) {
  response.send('Test');
});

app.get('/', function(request, response){
    console.log('request');
    response.sendFile(path.join(__dirname, '/public/index.html'));
  });

/*Test to get indication server has started*/
app.listen(3000, function listenUpServer() {
  console.log('Eh-Ehm...Listen Up! The express server started on port 3000');
  console.log('Hello World!');
});

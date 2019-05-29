// app.js
const express = require('express');
const app = express ();
var http = require ('http');

app.set ("port", process.env.PORT || 3000)

// Create an instance of the http server to handle HTTP requests
//let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    //res.writeHead(200, {'Content-Type': 'text/plain'});

    /* serve the static files */
	  app.use(express.static('static-files/'));
  	//app.use(express.static('images/'));

//});

// app.get('/', (req, res) => res.send('index.html'))

// Start the server on port 3000
// app.listen(3000, '127.0.0.1');
// console.log('Node server running on port 3000');

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

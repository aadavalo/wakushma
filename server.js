// app.js
const express = require('express');
const app = express ();
var http = require ('http');

app.set ("port", process.env.PORT || 3000)

    /* serve the static files */
	  app.use(express.static('static-files/'));


// Start the server on port 3000
// app.listen(3000, '127.0.0.1');
// console.log('Node server running on port 3000');

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var http = require('http');
var date = require('./modules/DateTime');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h2 style='color:blue;'>Welcome Node JS APP</h2>");
    res.write("<h2 style='color:black;'>Current date and time are:<br> <span style='color:red;'>" + date.Datetime() + "</span></h2>");
    res.end();
}).listen(8080);

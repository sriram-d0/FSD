console.clear();
var http=require('http');
var dt=require('./DateTime');
http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<marquee><h1 style='font:Times New Roman,color:brown;'>Current Date & Time is<b>"+dt.Datetime()+"</b></h1>");
    res.write("<br><p><b>URL Pattern:"+req.url+"</b></p>");
    res.end();
}).listen(8080);
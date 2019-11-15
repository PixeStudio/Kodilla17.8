var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/') {
		fs.readFile('index.html', function(err, html) {
			response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
			response.write(html);
			response.end();
		});
    } else {
		fs.readFile('404.png', "binary", function(error, file) {
			response.writeHead(404, {"Content-Type": "image/png"});
			response.write(file, "binary");
			response.end();
		});
    }
});

server.listen(8080);
console.log("Serwer działa na porcie 8080!");
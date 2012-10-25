var http = require('http');
var os = require('os');

http.createServer(function(req, res)
{
	var key;
	res.writeHead(200, {'Content-Type': 'text/html'});

	res.write('<html>\n<head></head>\n<body>\n');

	res.write('platform:' + process.platform + '<br/>\n');
	res.write('cpu:' + os.loadavg() + '<br/>\n');
	res.write('total mem:' + os.totalmem() + '<br/>\n');
	res.write('free mem:' + os.freemem() + '<br/>\n');

	res.end('</body>\n</html>\n');

}).listen(8080, '127.0.0.1');

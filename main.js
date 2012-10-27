var http = require('http');
var os = require('os');
var primaryListener = require('prime');
var myl = require('mysqlLink');

const PRIMARY_PORT = 18081;
const SECONDARY_PORT = 18082;

systemStatPackage = function()
{
	this.platform = process.platform;
	this.load = os.loadavg();
	this.totalmem = os.totalmem();
	this.freemem = os.freemem();
	this.hostname = os.hostname();
}

handleStatusRequest = function(req, res)
{
	var pkg = new systemStatPackage();
	res.writeHead(200, {'Content-Type': 'text/html'});

	res.end(JSON.stringify(pkg));
}


priParseArgs = function(req, res)
{
	primaryListener.handleRequest(req, res);
}

secParseArgs = function(req, res)
{
	if (req.url == "/status")
	{
		handleStatusRequest(req,res);
	}
	else
	{
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.end(req.url + " not found.");
	}

}

for (var i = 0; i < process.argv.length; i++)
{
	if (process.argv[i] == "primary")
	{
		console.log("starting primary...");
		http.createServer(priParseArgs).listen(PRIMARY_PORT);
		i = process.argv.length;
	}
}

http.createServer(secParseArgs).listen(SECONDARY_PORT);

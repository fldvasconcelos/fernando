var http = require('http')
var porta = 21178
 
http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'})
	res.end('Hello Node')
}).listen(porta)
 
console.log('Servidor rodando na porta: '+ porta)

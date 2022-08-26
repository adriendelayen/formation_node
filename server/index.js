const http = require('http');
const path = require('path');
const fs = require('fs').promises;
const mime = require('mime-types');

const server = http.createServer();

server.on('request', async (request, response) => {

    console.log(`Request URL: ${request.url}`);

    let content = null;
    /*response.setHeader('Content-Type', 'text/html, charset=utf-8');
    /*if("/" == request.url) {
        content = 'Bienvenue sur notre serveur Node';
    } else if("/coucou.html" == request.url){
        content = "Un autre message, qui dit coucou";
    } else {
        content = "404 - Not Found";
        response.statusCode = 404;
    }*/

    let public = request.url;
    if ('/' == request.url) {
        public = 'index.html';
    }
    try {
    const pathFile = path.join(__dirname, 'public', public);
    const extension = path.extname(pathFile);
    content = await fs.readFile(pathFile);

    response.setHeader('Content-Type', mime.lookup(extension) || 'text/plain');
    } catch (e) {
        response.statusCode = 404;
        content = '404 - Not Found';
    }

    response.end(content);

});

const port = 5000;
server.listen(port);
console.log(`Personal Node Server is Listening on http://localhost:${port}`);
console.log('Shutdown Node Server with CTRL + C');


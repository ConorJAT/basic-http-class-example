const http = require('http');
const fs = require('fs');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const html = fs.readFileSync(`${__dirname}/../client/client.html`);
const css = fs.readFileSync(`${__dirname}/../client/style.css`);

const onRequest = (request, response) => {
    // response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.write('Hello Server!');
    // response.end();

    if (request.url === '/style'){
        response.writeHead(200, {'Conent-Type': 'text/css'});
        response.write(css);
        response.end();
    } else {
        response.writeHead(200, {'Conent-Type': 'text/html'});
        response.write(html);
        response.end();
    }
    
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});
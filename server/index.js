const http = require('http');

//event emiters
//streams
//cluster

const server = http.createServer();
server.on('request', (req, res) => {
    res.write('Hello Node\n');
    setTimeout(() => {
        res.write('I am still on ..... /n');
        res.end();
    }, 3000)
});
server.listen(8080);
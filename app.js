const http = require('http');

// const server = http.createServer((req,res) =>{
//     console.log('request event');
//     res.end('Hello Ebenny');
// });

//using Event Emitter API
const server = http.createServer()
// emits request event
// subscribe to it / listen for it / respond to it

server.on('request', (req, res) =>{
    res.end('Welcome');
});

server.listen(5000);
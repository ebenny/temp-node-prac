const EventEmitter = require('events');


const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) =>{
    console.log(`data received from user: ${name}, ${id}`); 
});

customEmitter.on('response', () =>{
    console.log(`some other logic here`);
});

customEmitter.emit('response', 'john', 34); 
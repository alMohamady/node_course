const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response' , (name , age) => {
    console.log(`we are here name is ${name}, age is ${age} `);
});

customEmitter.on('response' , () => {
    console.log(`we are here again name `);
});

customEmitter.emit('response', "ahmed", 37);

const os = require('os');

//const user = os.userInfo();
//console.log(user);
//console.log(os.uptime());

const curruntOs = {
    name: os.type(),
    release: os.release(),
    memory: os.totalmem(),
    freeSp: os.freemem() 
}

console.log(curruntOs);
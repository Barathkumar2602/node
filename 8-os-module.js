// os module...............

const os=require('os')
// info adout current user
const user= os.userInfo()

// method returns the system uptime in seconds

console.log(`the system uptime is ${os.uptime()}seconds`)

const currentOS={
    name: os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem:os.freemem(), 
    vers: os.version(),
    user,
   
}

console.log(currentOS)
// 1. imports http module using require

let http = require ("http")

// 2.  server has created and handled Request   
let server = http.createServer (handleReq) ;

// handlereq 
function handleReq(req,resp){
  console.log("welcome to browser request has come in !!!!!")
}

// server.listen(port,ip-address)
// port will be greater than 1024
// ip address => 127.0.0.1 /   "localhost"
// 3.  server has listen to this port and ip-address
server.listen(3000,"127.0.0.1");




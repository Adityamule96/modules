// 1. imports http module using require

//let http = require ("http")

// handlereq 
//function handleReq(req,resp){
  //console.log("welcome to browser request has come in !!!!!")
 // resp.write("hello , welcome to nodejs server");
 //  resp.end();
 
 /*var body="Hello World/n";
 var content_length=body.length;
 resp.writeHead(200,{
         'Content-Length': content_length ,
         'Content-Type':  'text/plain'});
  resp.end(body);       
}
*/
// 2.  server has created and handled Request   
// let server = http.createServer (handleReq) ;

// server.listen(port,ip-address)
// port will be greater than 1024
// ip address => 127.0.0.1  (or)   "localhost"

// 3.  server has listen to this port and ip-address
// server.listen(3000,"127.0.0.1");

// 1. include http module using require on RunServer .js file

let http = require ("http")

function handleReq(req,resp){
   var d1=new Date();
   
 var body=" <html><body bgcolor='lightgreen'>";
 body=body+"<h1>welcome to NodeJs , today is </h1> "+d1;
 body=body+"</body></html>";
 var content_length = body.length;
 resp.writeHead(200,{
         'Content-Length': content_length ,
         'Content-Type':  'text/html'});
  resp.end(body);       
}

let server = http.createServer (handleReq) ;
server.listen(3001,"127.0.0.1");

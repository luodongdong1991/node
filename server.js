let http = require('http');
http.createServer((request,response)=>{
    //response 响应；
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.write("Hello World")
    console.log("http://localhost:8888/");
    response.end()
}).listen(8888)


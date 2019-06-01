// setTimeout(function(){
//     console.log("world");
// }, 2000);

// console.log("hello");

//Simple HTTP Server

// var http = require('http')
// var server = http.createServer(function(req,res){
//     res.writeHead(200, {'content-type' : 'text/plain'})
//     //console.log(res.statusCode);
//     setTimeout(function(){
//         res.end('time out completed.....');
//     },5000);
//     res.write(' hello there');
//     //res.end();
// })

// server.listen(8000); 


//TCP Server

// var net = require('net')
// var s = net.createServer(function(socket){
//     socket.write('hello');
//     socket.write('there');
//     socket.on('data',function(data){
//         //console.log(data.toString()); 
//         socket.write(data);
//     })

// })

// s.listen(8000);


// chat application 

// var net = require('net')
// let sockets = [];
// var s = net.createServer(function(socket){
//     sockets.push(socket);
//     socket.on('data',function(data){
//         sockets.forEach((s)=>{
//             s.write(data);
//         })
//     });
// })

// s.listen(8000);


// render html via node

var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req,res){
    if(req.url === '/home'){
        fs.readFile('./index.html', null ,function(err, content){
            if(err){
                res.writeHead(404);
                res.write('something went wrong');
                res.end();
            }
            else{
                res.writeHead(200);
                res.write(content);
                res.end();
            }
        })
    }
})

server.listen(8000);



// https://github.com/pranavm27/nodejs_workshop

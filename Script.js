/*
var http = require('http');

/* file system 
var fs = require('fs');


http.createServer((req,res)=>{
write , read , append, delete
    fs.unlink('test.txt',(err)=>{
        if(err) throw err;
        console.log('file deleted')

    })

}).listen(8080) */

var http = require('http');
var uc = require('upper-case');

http.createServer((req,res)=>{
    res.write(uc.upperCase('Hello'));
    res.end();
}
).listen(8080)



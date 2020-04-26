//阻塞
var fs = require('fs');
var data  = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('end')
//非阻塞；
fs.readFile('input.txt',function(err,data){
    if(err){
        return  console.log(ee)
    }
    console.log(data.toString());

})
console.log('async end;')
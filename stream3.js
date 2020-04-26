//管道流
let fs  = require('fs');
let readerStream = fs.createReadStream('input.txt');

let writeStream =fs.createWriteStream('out2.txt');
//
readerStream.pipe(writeStream);
console.log('end')
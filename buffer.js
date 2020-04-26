var fs = require('fs');
const buf = Buffer.from('runoob','ascii');
console.log(buf)
console.log(buf.toString())
console.log(buf.toString('hex'))
console.log(buf.toString('base64'))
//写入缓存区域；
const buf2 = Buffer.alloc(256);
len = buf2.write('www.runoob.com');
console.log('len:'+len)
console.log(buf2.toString());
//读取并写入
//非阻塞；
fs.readFile('input.txt',function(err,data){
    if(err){
        return  console.log(err)
    }
    //读取出来的也是一个buffer 二进制的
    console.log(data.length,data,data.toString());

})
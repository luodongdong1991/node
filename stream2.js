let fs= require('fs');
let data = '菜鸟教程官网地址：www.runoob.com';

//
let writeStream = fs.createWriteStream('out.txt');
//
writeStream.write(data,'UTF-8');
writeStream.end();

// 处理流事件 --> data, end, and error
writeStream.on('finish',function(){
   console.log('xieru wan cheng')
});
writeStream.on('err',function(){
   console.log('err.stack');
})
console.log('chengxu wan cheng ')

//yingru
var events =require('events');
//创建
var  eventEmitter = new events.EventEmitter();
// 绑定事件及事件的处理程序
function show(){
    console.log('show')
    //console.log(eventEmitter)
}
eventEmitter.on('name',function(){
    console.log('nihao')
    show()
})
// 触发事件
eventEmitter.emit('name');

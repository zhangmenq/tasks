/*
* process：他是一个全局对象
* 属性一：argv：-Array，返回的是一组包含命令行参数的数组
* 2，execPath：-开启当前进程的绝对路径
* 3，env：-返回用户换机信息
*
* */
// console.log(process);
// console.log(global.process);

// console.log(process.argv);
/*[ 'C:\\Program Files\\nodejs\\node.exe',
'E:\\node\\nodeJS\\process\\1.js' ]*/

/*
*当用node运行时，后面可以带参数
* E:\node\nodeJS\process>node 1.js a=1 b=2
* 结果如下：
 [ 'C:\\Program Files\\nodejs\\node.exe',
 'E:\\node\\nodeJS\\process\\1.js',
 'a=1',
 'b=2' ]

 * */

// console.log(process.env);
// console.log(process.pid);  //返回当前进程的pid 29240
// console.log(process.title); //
// console.log(process.arch); //返回当前cpu处理器 x64

// setTimeout(function(){
//   process.exit();  //退出
// },5000);
/*
*输入设备：键盘，鼠标，摄像头，扫描仪，光笔，手写输入板，语音输入等
* 输出设备：打印机，显示器，绘图仪，影像输出系统
* stdin和stdout提供了操作输入数据和输出数据的方法，我们也通常称为IO操作
* */

// process.stdout.write('hello'); //hello

//输出流
// function Log(data){
//     process.stdout.write(data);
// }
// Log('你好');
/*
*
* 默认情况下，输入流是关闭的，要监听处理输入流数据，首先要开启输入流
* */
//开启
process.stdin.resume();
//输入,用于监听用户的输入数据，默认情况下，输入流是关闭的,函数里面的表示的是用户输入的值
// process.stdin.on('data',function(chuck){
// console.log('用户输入：' + chuck);
/*dsff
用户输入：dsff*/
// });

var a ;
var b;
process.stdout.write('请输入a的值：');
process.stdin.on('data',function(chuck){
    if(!a){
        a = Number(chuck);
        process.stdout.write('请输入b的值：');
    }else{
        b=Number(chuck);
        process.stdout.write('结果是：'+ (a + b));
    }
});
/*
*请输入a的值：11
 请输入b的值：12
 结果是：23
* */
/*
*Buffer类是一个全局变量类型，用来直接处理2进制数据的，它能够使用多种方式构建
* */
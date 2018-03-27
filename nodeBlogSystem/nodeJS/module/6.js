/*
*__filename：返回当前模块文件的解析后的绝对路径，该属性其实并非全局的，而是模块作用域下的
* __dirname：返回当前模块文件所在目录（文件夹）解析后的绝对路径，该属性也不是全局的，而是模块作用域下的
* */
// console.log(__filename); //E:\node\nodeJS\module\6.js
// console.log(__dirname); //E:\node\nodeJS\module

setInterval(function(){
    let d = new Date();
    console.log('现在是:'+d.getFullYear()+'年'+ (d.getMonth()+1)+'月' + d.getDate() + '日' + d.getHours()+':' + d.getMinutes() +':' + d.getSeconds());
},1000);

/*
*全局对象
* 1，process对象，它是一个全局对象，可以在任何地方都能访问到，通过这个对象提供的属性和方法，
* 使我们可以对当前运行的程序的进程进行访问和控制，也是一个进程对象
*
* */
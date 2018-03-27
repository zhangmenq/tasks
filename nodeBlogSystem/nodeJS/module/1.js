/*
1,一个文件就是一个模块
2，，每个模块都有自己的作用域
3，我们使用var 来声明的一个变量，并不是全局的，而是属于当前模块下的
* */

// let b = 200;
// console.log(b);  //200
// console.log(global.b); //undefined

//声明全局的变量
// global.b = 100;
// console.log(b); //200
// console.log(global.b); //100

//__filename 输出当前文件的绝对路径，也是当前文件被解析过后的绝对路径
// console.log(__filename); //E:\node\nodeJS\module\1.js

/*
* 模块加载系统
* require('模块')
* */
// require('./2.js');  //这是2.js模块

/**
 * 模块加载机制
 * 路径
 * 绝对路径
 * 相对路径
 */
// require('e:/node/nodeJS/module/2.js'); //这是2.js模块
//  require('2.js'); // 不加./就会加载node内置中的核心模块，或者是node_modules里面的核心模块

/*
*文件查找机制 文件名，.js .json .node的查找方法
* 1，首先按照加载的模块的文件名进行查找
* 2，如果没有找到，则会在模块文件名称后加上.js的后缀，进行查找
* 3,如果还没找到，则会在模块文件名称后加上.json的后缀，进行查找
* 4，如果还没找到，则会在模块文件名称后加上.node的后缀，进行查找
* */
// require('./3'); //bbb

/*
* */
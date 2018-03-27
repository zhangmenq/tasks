// var a = 100;
/*
* 在一个模块中通过var 定义的变量，其作用域范围就是当前模块，外部不能够直接的访问
* 如果我们想在一个模块中能够访问另外一个模块中定义的变量，可以：
* 1，把变量作为global对象的一个属性,但是这样的做法是不推荐的
* global.a = 100;
* 2，使用模块对象module（注意他不是全局的）
* */
// global.a = 100;

/*
*module:保存提供和当前模块有关的一些信息
* 在这个module对象，有一个子对象：exports对象
* 我们可以通过这个对象把一个模块中的局部变量对象进行提供访问

* */
// console.log(module);
/**
 * Module {
  id: '.',
  exports: {},
  parent: null,
  filename: 'E:\\node\\nodeJS\\module\\5.js',
  loaded: false,
  children: [],
  paths:
   [ 'E:\\node\\nodeJS\\module\\node_modules',
     'E:\\node\\nodeJS\\node_modules',
     'E:\\node\\node_modules',
     'E:\\node_modules' ] }
 */
var  a = 100;
// //将数据挂在在exports对象上
// module.exports.a=a;

/*
*在模块作用域，还有一个内置的模块对象，exports，它其实就是module.exports
* */
// console.log(module.exports === exports); //true
// exports.a=a;

module.exports = [1,2,3,4]; //exports和module.exports的指向关系已经断开啦
exports.a = 200; //此时关系断开啦，这里的a在4.js里面就不会有值，使用的时候，不要去重写它们
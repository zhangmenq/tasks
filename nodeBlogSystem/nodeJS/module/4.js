// require('./5');
// console.log(a); //a is not defined


var m5 = require('./5'); //这个方法的返回值，其实就是被加载模块中的module.exports
console.log(m5);  //{ a: 100 }
/*
* Buffer类
* 用于操作二进制数据流
* */

// 1.0 new buffer(size); size[Number]创建一个Buffer对象，并为这个对象分配一个大小
//当我们为一个Buffer对象分配空间大小以后，其长度是固定的，不能修改
// var bf = new Buffer(5); //分配了5个长度的大小
// console.log(bf); //<Buffer 00 00 00 00 00>
// bf[1]= 2;
// console.log(bf); //<Buffer 00 02 00 00 00>

//2.0 new Buffer(array);
// var bf = new Buffer([1,2,3]);
// console.log(bf); //<Buffer 01 02 03>
// bf[10] = 10;
// console.log(bf); //<Buffer 01 02 03>
// 3.0 new Buffer(string,[encoding]);

// var bf = new Buffer('miaov','utf-8');
//  console.log(bf); //<Buffer 6d 69 61 6f 76>
//  for(var i = 0; i<bf.length;i++){
//      console.log(bf[i].toString(16)); //6d 69 61 6f 76
//      console.log(String.fromCharCode(bf[i])); //miaov 将编码转化成字符串的方法
//  }

var str1= 'miaoc';
console.log(str1.length); //5
var bf1 = new Buffer(str1);
console.log(bf1.length); //5

var str2 = '繁花';
console.log(str2.length); //2
var bf2 = new Buffer(str2);
console.log(bf2.length); //6

/*
*buffer.length指的是字节的长度，一个中文占的3个字节
* 如果要拿中文的个数，用字符串的长度获取
* */

/*
*buf.write(要写入的字符串，从Buff二对象中的第几位开始写入，下标是0开始，
* 写入的字符串的长度，写入字符串的编码);
* 写入的时候注意字符截取问题
*
* */

var str = 'miaov';
console.log(new Buffer(str)); //<Buffer 6d 69 61 6f 76>
var bf = new Buffer(5);
// bf.write( str );
// console.log(bf); //<Buffer 6d 69 61 >

bf.write(str,1,3);
console.log(bf); //<Buffer 00 6d 69 61 00> 表示的是从下标为1 的位置开始写入，写入3个
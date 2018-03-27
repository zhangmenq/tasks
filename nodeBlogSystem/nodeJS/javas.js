// let a = 100;
// console.log(a);

// let d = new Date();
// console.log(d.getFullYear());
// console.log(d.getMonth());

function Person(name) {
    this.name = name;
}

Person.prototype.run = function(){
    console.log(this.name + ' running');
}
 let p1 = new Person('violet');
p1.run();

/*
相同点：
1，在 ecmascript部分node和js其实是一样的额，比如数据类型的定义，语法结构，内置对象
不同点
2，在js中的顶层对象是window
在node中的底层对象是global对象，不对外进行访问的
4，注意：在node中也没有什么window
* */

 var a = 100;  //因为var定义的是模块作用于，而不是全局对象
console.log(global.a);  //undefined


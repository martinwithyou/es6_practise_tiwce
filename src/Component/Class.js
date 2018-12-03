import React, { Component } from 'react';

class ClassComponent extends Component {
    componentWillMount() {
    //    function point(x,y){
    //        this.x =x;
    //        this.y =y;
    //    }
    //    point.prototype.toString = function(){
    //        return this.x+this.y
    //    }
    //    var p = new point(1,2);
    //    console.log(p);

//     class Point{
//         constructor(x,y){
//             this.x = x;
//             this.y = y;
//         }
//         toString(){
//             return this.x+this.y
//         }
//     }
//     console.log(typeof Point);

//     class Bar{
//         doStuff(){
//             console.log('stuff');
//         }
//     }
//     var b = new Bar();
//    console.log( b.doStuff() );
   //构造函数的prototype属性，
   //在 ES6 的“类”上面继续存在。
   //事实上，
   //类的所有方法都定义在类的prototype属性上面

//    let person  =new class{
//        constructor(name){
//            this.name =name;
//        }
//        sayName(){
//            console.log(this.name);
//        }
//    }('zhang_san');

//    person.sayName();

// class Bar{
//     doStuff(){
//         console.log('stuff')
//     }
// }
// var b = new Bar();
// b.doStuff();
//构造函数的prototype属性，
//在 ES6 的“类”上面继续存在。
//事实上，
//类的所有方法都定义在类的prototype属性上面。

// class Point{
//     constructor(){

//     }
//     toString(){

//     }
//     toValue(){

//     }
// }

// var p = new Point();
// console.log(p);

// console.log(Point.prototype)

// class B{}
// let b = new B();
// console.log(b.constructor === B.prototype.constructor);

// class Point{
//     constructor(){

//     }
// }
// Object.assign()

//严格模式
//constructor方法
// class Point{

// }
// class Point{
//     constructor(){}
// }

//定义类
// class Point{
//     constructor(x,y){
//         this.x =x;
//         this.y =y;
//     }
//     toString(){
//         return '(' + this.x + ', ' + this.y + ')';
//     }
// }

// var  point  =new Point(2,3);
// //console.log( point.toString() );
// //console.log( point.hasOwnProperty('x') ) // true
// //console.log( point.hasOwnProperty('y') )// true
// //console.log(point.hasOwnProperty('toString') )// false
// //console.log(point.__proto__.hasOwnProperty('toString') )
// // true
// var p1 =new Point(2,3);
// var p2 =new Point(3,2);
// console.log(p1.__proto__ === p2.__proto__ );

// let person =new class{
//     constructor(name){
//         this.name =name
//     }
//     sayName(){
//         console.log(this.name)
//     }
// }('zhangsan');
// person.sayName();

//类不存在变量提升

// class ColorPoint extends Point{
//     constructor(x,y,color){
//         super(x,y)
//         //调用父类的constructor
//         this.color = color
//     }
//     toString(){
//         return this.color + ' ' + super.toString(); // 调用父类的toString()
//     }
// }























    }
    render() {
        return (
            <div className="foot">
                <h1>you are ClassComponent</h1>
            </div>
        );
    }
}

export default ClassComponent;

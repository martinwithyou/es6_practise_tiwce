import React, { Component } from 'react';

class ProxyComponent extends Component {

componentWillMount() {
  
    //proxy
    //Proxy 用于修改某些操作的默认行为，
    //等同于在语言层面做出修改，
    //所以属于一种“元编程”（meta programming），
    //即对编程语言进行编程
    
    //Proxy 可以理解成，在目标对象之前架设一层“拦截”，
    //外界对该对象的访问，都必须先通过这层拦截，
    //因此提供了一种机制，可以对外界的访问进行过滤和改写。
    //Proxy 这个词的原意是代理，
    //用在这里表示由它来“代理”某些操作，可以译为“代理器”。

    // var obj = new Proxy({}, {
    //     get: function (target, key, receiver) {
    //       console.log(`getting ${key}!`);
    //       return Reflect.get(target, key, receiver);
    //     },
    //     set: function (target, key, value, receiver) {
    //       console.log(`setting ${key}!`);
    //       return Reflect.set(target, key, value, receiver);
    //     }
    //   });
    //   obj.count = 1;
    //   ++obj.count
      //上面代码说明，Proxy 实际上重载（overload）了点运算符，
      //即用自己的定义覆盖了语言的原始定义。

    //   var proxy = new Proxy( {}, {
    //       get:function(target,property){
    //           return 35;
    //       }
    //   });
    //   console.log(proxy.time);
    //   console.log(proxy.name);
    //   console.log(proxy.title);



      //上面代码中，作为构造函数，Proxy接受两个参数。
      //第一个参数是所要代理的目标对象（上例是一个空对象），
      //即如果没有Proxy的介入，操作原来要访问的就是这个对象；
      //第二个参数是一个配置对象，对于每一个被代理的操作，
      //需要提供一个对应的处理函数，该函数将拦截对应的操作。
      //比如，上面代码中，配置对象有一个get方法，
      //用来拦截对目标对象属性的访问请求。
      //get方法的两个参数分别是目标对象和所要访问的属性。
      //可以看到，由于拦截函数总是返回35，
      //所以访问任何属性都得到35。


      //如果handler没有设置任何拦截，那就等同于直接通向原对象
      //   var target = {};
      //   var handler = {};
      //   var proxy = new Proxy(target,handler);
      //   proxy.a = 'b';
      //   console.log(proxy.a)

      
      
    //   下面是 Proxy 支持的拦截操作一览，一共 13 种。

    // get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。

    // set(target, propKey, value, receiver)：拦截对象属性的设置，
    //比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。

    // has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。

    // deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，
    //返回一个布尔值。

    // ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、
    //Object.getOwnPropertySymbols(proxy)、
    //Object.keys(proxy)、for...in循环，返回一个数组。
    //该方法返回目标对象所有自身的属性的属性名，
    //而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。

    // getOwnPropertyDescriptor(target, propKey)：
    //拦截Object.getOwnPropertyDescriptor(proxy, propKey)，
    //返回属性的描述对象。

    // defineProperty(target, propKey, propDesc)：
    //拦截Object.defineProperty(proxy, propKey, propDesc）、
    //Object.defineProperties(proxy, propDescs)，返回一个布尔值。

    // preventExtensions(target)：拦截Object.preventExtensions(proxy)，
    //返回一个布尔值。

    // getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。

    // isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。

    // setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，
    //返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。

    // apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，
    //比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。

    // construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，
    //比如new proxy(...args)。

    //Proxy的实例方法
    //get()
    // var person ={
    //     name:'zhangsan'
    // }

    // var proxy = new Proxy(person,{
    //     get:function(target ,property){
    //         if(property in target){
    //          return target[property]
    //         }else{
    //             throw new ReferenceError("Property \"" + property + "\" does not exist.");
    //         }
    //     }
    // })

    // console.log(proxy.name);
    //console.log(proxy.age);

    // let proto = new Proxy({},{
    //     get(target,propertyKey, receiver){
    //         console.log('get'+propertyKey)
    //         return target[propertyKey]
    //     }
    // });
    // let obj = Object.create(proto);
    // console.log(obj.foo)





































































}
render() {
    return (
      <div className="foot">
          <h1>you are ProxyComponent</h1>
      </div>
    );
}
}

export default ProxyComponent;

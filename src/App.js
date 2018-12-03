import React, { Component } from 'react';
import './App.css';
import Head from './Component/Head.js';
import Body from './Component/Body.js';
import Foot from './Component/Foot.js';
import Heigh from './Component/Heigh.js';
import Width from './Component/Width.js';
import Inner from './Component/Inner.js';
import Outter from './Component/Outter.js';
import StringComponent from './Component/String.js';
import NumberComponent from './Component/Number.js';
import ArrayComponent from './Component/Array.js';
import FunctionComponent from './Component/Function.js';
import ObjectComponent from './Component/Object.js';
import SymbolComponent from './Component/Symbol.js';
import SetAndMap from './Component/SetAndMap.js';
import Proxy from './Component/Proxy.js';
import ReflectComponent from './Component/Reflect.js';
import PromiseComponent from './Component/Promise.js';
import IteratorComponent from './Component/Iterator';
import GeneratorComponent from './Component/Generator';
import AsyncComponent from './Component/Async';
import ClassComponent from './Component/Class';



class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Head />
        <Body />
        <Foot />
        <Heigh />
        <Width />
        <Inner />
        <Outter />
        <StringComponent />
        <NumberComponent />
        <ArrayComponent />
        <FunctionComponent />
        <ObjectComponent />
        <SymbolComponent />
        <SetAndMap />
        <Proxy />
        <ReflectComponent />
        <PromiseComponent />
        <IteratorComponent />
        <GeneratorComponent />
        <AsyncComponent />
        <ClassComponent />


      </div>
    );
  }
}

export default App;

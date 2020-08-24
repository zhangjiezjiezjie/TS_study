/*
    函数的类型：
      函数声明
      函数表达式
      可选参数
      形参默认值
      剩余参数
*/


/* 
定义函数
*/

// js语法定义
(() => {
  // 函数声明
  function add(x, y) {
    return x + y
  }

  // 函数表达式
  let myAdd = function(x, y) { 
    return x + y
  }

  //箭头函数
  let add2 = (x , y) => {
    return x + y
  } 

})();

// ts语法定义
(() => {
  function add(x: number, y: number): number {
    return x + y
  }
  
  let myAdd = function(x: number, y: number): number { 
    return x + y
  }

  let add1=(x:string,y:string):string => {
    return x + y
  }

  // 完整写法
  let myAdd2: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y
  }

})()
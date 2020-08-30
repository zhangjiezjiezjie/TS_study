/*
 TS中类的用法：
  1、访问修饰符：
      public：任何地方都可见，默认是public
      protected:类内部或子类中可见
      private：只在类内部可见
  2、readonly
      只能通过构造方法赋值一次
  3、抽象类
      可以包含抽象方法
      不可以有实例
*/


/* 
类的基本定义与使用
*/
(function () {

  class Greeter {
    // 声明属性
    message: string

    // 构造方法
    constructor (message: string) {
      this.message = message
    }

    // 一般方法
    greet (): string {
      return 'Hello ' + this.message
    }
  }

  // 创建类的实例
  const greeter = new Greeter('world')
  // 调用实例的方法
  console.log(greeter.greet())
  
})()
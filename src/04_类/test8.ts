/* 
抽象类
  不能创建实例对象, 只有实现类才能创建实例
  可以包含未实现的抽象方法

  抽象类：不能创建实例
  实现类：可以创建实例
  抽象方法：有abstract,无方法体(没有{})，起约束作用(即：
    动物类有speak方法，但是每个动物的speak方法中的行为不一样，可以先设为抽象方法，
    继承了之后再变为实现方法，具体实功能)
  实现方法：无abstract,有方法体
*/
(() => {
  abstract class Animal {

    abstract cry () //抽象方法：有abstract,无方法体(没有{})
    run () {
      console.log('run()')
    } //实现方法：无abstract,有方法体
  }

  class Dog extends Animal {
    cry () {
      console.log(' Dog cry()')
    }
  }

  const dog = new Dog()
  dog.cry()
  dog.run()

})()
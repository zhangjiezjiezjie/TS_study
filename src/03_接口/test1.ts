/* 
在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
接口: 是对象的状态(属性)和行为(方法)的抽象(描述)
接口类型的对象
    多了或者少了属性是不允许的
    可选属性: ?
    多余属性检查：类型断言, 调用时传的参数后面加上 as interface名
                 索引签名,interface中加上[任意名：string]：any
                 类型兼容性,将传的参数放在统一的一个变量下，传实参时，传这个变量即可
    只读属性：readonly
    除了对接口的属性可以设置为只读属性；数组可以设置只读属性
*/

/* 
需求: 创建人的对象, 需要对人的属性进行一定的约束
  id是number类型, 必须有, 只读的
  name是string类型, 必须有
  age是number类型, 必须有
  sex是string类型, 可以没有
*/

(function () {
  // 定义人的接口
  interface IPerson {
    readonly id: number
    name: string
    age: number
    sex?: string
  }

  const person1: IPerson = {
    id: 1,
    name: 'tom',
    age: 20,
    sex: '男'
  }

  const person2: IPerson = {
    id: 2,
    name: 'tom',
    age: 20,
    // sex: '男' // 可以没有
    // xxx: 12 // error 没有在接口中定义, 不能有
  }
  // person2.id = 2 // error
  console.log(person1, person2)

  interface Vegetable{
    color?:string,//可选属性
    readonly type:string, //只读属性
    [prop:string]:any
  }

  const getVegetable=({color,type}:Vegetable)=>{
    return `A ${color?color:''} ${type}`
  }
// 类型检查
  console.log(
    getVegetable({
      color:'red',
      type:'tomoto',
      size:12,
    }as Vegetable)
  )
  console.log(
    getVegetable({
      color:'yellow',
      type:'orige',
      size:19,
    })
  )
  let vegetables={
    color:'green',
    type:'apple',
    size:13,
    price:30
  }
  console.log(
    getVegetable(vegetables)
  )
// 只读属性
let vegetable1:Vegetable={
  type:'carrot'
}
// vegetable1.type='banbana'  type是只读属性，不能修改
// 限定数组只能读,不能修改
 interface Arr{
   0:string,
   readonly 1:number
 }
 let arr5:Arr=['a',1]
 console.log(arr5)
//  arr5[1]=3 //报错，数组的下标为1的值是只读属性,不能修改

// 可以通过ReadonlyArray<T>设置数组为只读，那么它的所有写方法都会失效
let ro: ReadonlyArray<number>=[1,2,3,5];
/** 1 */
// ro[1]=5;
/** 2  对只读数组赋值一个普通数组也是错误的，*/
// let arr9:number[]=[];
// arr9=ro;
/** 3  对只读数组可以对其重新类型断言*/
(<number[]>ro)[1]=5;

// 函数接口：
/**
*  1、为了使用接口表示函数类型，我们需要给接口定义一个调用签名
* 2、对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
* 3、函数的参数会逐个进行检查， 如果不指定类型，TypeScript的类型系统会推断出参数类型
*/
// interface addFunc{
//   // (参数：参数类型)：返回值类型
//   (a1:string,a2:number):string
// }
// 建议用类型别名
type addFunc = (a1:string,a2:number) =>string
let add:addFunc=(n1,n2)=>n1+n2
let sum = add('1',2)
console.log(sum)
// 可索引：共有支持两种索引签名：字符串和数字。可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
// 1 
interface Suoyin{
  [id:string]:string
}
let a0:Suoyin={
  a:'a',
  1:'b'
}
// 2
interface StringArray {  //索引签名
  [index: number]: string;
}
var testFun=function(){
    let myArray: StringArray;
    myArray = ["Bob", "Fred"];   
    let myStr: string = myArray[0];
    console.log(myStr);
}
testFun();
// 接口继承 A extends B

// 混合类型接口
//   interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
//   }
// function getCounter(): Counter {
//   let counter = <Counter>function (start: number) { };
//   counter.interval = 123;
//   counter.reset = function () { };
//   return counter;
// }
// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;


})()

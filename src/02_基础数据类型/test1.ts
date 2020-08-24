/* 
基础数据类型
1. boolean
2. number
3. string
4. null和undefined
5. 数组
6. 元组(Tuple) 
7. 枚举(enum)
8. any
9. void
10. object
*/

(function () {
  // 1. boolean
  let isDone: boolean = false
  isDone = true
  // isDone = 2 // error

  // 2. number
  let a1: number = 10 // 十进制
  let a2: number = 0b1010  // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制

  // 3. string
  let name: string = 'tom'
  name = 'jack'
  // name = 12 // error
  let age: number = 12
  const info = `My name is ${name}, I am ${age} years old!`

  // 4. undefined和null
  let u: undefined = undefined
  let n: null = null
  /* undefined和null类型的变量意义不大 */
  /* undefined和null是所有类型的子类型 ==》可以把undefined和null赋值给任意类型的值，不会报错*/
  let n1:string='aaa'
  n1=null
  n1=undefined
  /* 在ts非严格模式下才可以, 在严格模式下会报错 */
  let a5: string = null

  // 5. 数组
  const list1: number[] = [1, 2, 3]
  const list2: Array<number> = [1, 2, 3]
    //任意类型数组
  const arr:any[]=[1,'ad',true]
  const arr1:Array<any>=['3',1,true]
  
  // 6. 元组(Tuple)
  /* 一个已知数量和类型的数组, 元素不必类型相同
     可以添加该元组中声明的任一类型的元素，即当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
  */
  let t1: [string, number]
  t1 = ['hello', 10]
  // t1 = [10, 'hello'] // error
  console.log(t1[0].substring(1))
  // console.log(t1[1].substring(1)) // error number类型没有此方法
  // 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
  t1.push(23)
  // t1.push(true) //报错

  // 7. 枚举:用于取值被限定在一定的范围内的场景，如：一周只有七天，颜色为红绿蓝
  /* 为一组数值赋予友好的名字 */
  enum Color {
    Red,
    Green,
    Blue
  }
  // 枚举数值默认从0开始依次递增
  // 根据特定的名称得到对应的枚举数值
  let myColor: Color = Color.Green  // 0
  console.log(myColor, Color.Red, Color.Blue)
  // 指定枚举数值
  enum Color2 {
    Red = 1,
    Green = 3,
    Blue=5
  }
  // 根据枚举数值得到对应的名称
  console.log(Color2.Green, Color2[3]) // 3 'Green'

  // 8. any 
  /* 任意类型, 数据类型不固定时使用 
     any类型的变量可以赋任意类型的值
     any类型的变量可以使用任意属性和方法
     定义不指定类型的变量，且定义时不赋值，相当于类型的any
  */
// any类型的变量可以赋任意类型的值
  let notSure: any = 3
  notSure = 'mybe a string'
  notSure = true
  // 不同类型类型的数组
  const list3: any[] = [1, true, 'abc']
// any类型的变量可以使用任意属性和方法
  let any1:any='qqqqqqqqqq'
  console.log(any1.length)
  console.log(any1.test())
// 定义不指定类型的变量，且定义时不赋值，相当于类型的any
   let any2
   any2='aaa'
   any2=4
   console.log(any2.length)

  // 9. void
  /* 表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值 */
  function fn(): void {
    console.log('fn()')
    // return undefined
    // return null
    // return 1 // error
  }

  // 10. object
  function fn2(obj: object): object {
    console.log('fn2()', obj)
    return {}
    // return undefined
    // return null
  }
  console.log(fn2(new String('abc')))
  // console.log(fn2('abc') // error
  console.log(fn2(String))
})()


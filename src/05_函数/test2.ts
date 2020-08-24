/* 
可选参数 : 参数名 ？ 
形参默认值（默认参数）
剩余参数 : ...args
*/
(() => {
  function buildName(firstName: string='A', lastName?: string): string {
    if (lastName) {
      return firstName + '-' + lastName
    } else {
      return firstName
    }
  }
  console.log(buildName('C', 'D'))
  console.log(buildName('C'))
  console.log(buildName())
  

  function info(x: string, ...args: string[]) {
    console.log(x, args)
  }
  // ...args = ['c', 'b', 'a']
  info('abc', 'c', 'b', 'a')

})()
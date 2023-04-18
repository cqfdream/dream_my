// let a = null
// let a = {}
let a = new Date()
// console.log(typeof 'hello');
console.log(typeof a);


if (typeof a === 'object' && a !== null){
  console.log('引用类型');
}
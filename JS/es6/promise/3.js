function xq(){
  return new Promise((resolve,reject) => {
     setTimeout(() => {
    console.log('老宋去相亲');
    resolve('ok')
},2000)
})
 
}

function marry(){
  return new Promise((resolve,reject) =>{
     setTimeout(() => {
    console.log('老宋结婚了');
    resolve('ok')
},1000)
})
 
}

function son(){
  setTimeout(() => {
    console.log('小宋出生了');
},500)
}

xq().then(marry).then(son)
//相当于
//xq()
// .then(marry)
// .then(son)


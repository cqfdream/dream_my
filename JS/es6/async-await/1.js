let data = null

function getData(){
  return new Promise((resolve,reject) => {
  setTimeout(()=>{
  data={name: 'zc',age: 19}
    resolve()
},1000)
})
}
function showData(){
console.log(`我正在展示获取到的数据: ${JSON.stringify(data)}`);
}

getData().then(showData)

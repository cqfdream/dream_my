function a(){
  console.log('aa');
}

function b(callback){
  setTimeout(()=>{//异步代码
    console.log('bb');
    callback()
  },1000)
  
}


function c(){
  console.log('cc');
}

a()
b(c)



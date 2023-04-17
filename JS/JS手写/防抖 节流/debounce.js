//防抖 在触发一次函数后的规定时间内没有再次触发，才执行

function debounce (func,wait){
  var timeout
  return function(){
    clearTimeout(timeout)

    // timeout = setTimeout(func,wait)


       timeout = setTimeout(() =>{
        func.call(this)
      },wait)
    
  }
}
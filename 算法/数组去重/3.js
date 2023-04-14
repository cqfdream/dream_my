let arr = [1,1,'1','1']

function unique(arr){
   let res = []
    for (let i= 0; i < arr.length; i++){
      for (var j=0 ;j<res.length;j++){
        if (arr[i]===res[j]){
          break //continue  
        }
      }
      if (j === res.length){
        res.push(arr[i])
      }
    }
    return res
}
console.log(unique(arr));
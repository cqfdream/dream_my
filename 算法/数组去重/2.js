let arr = [1,1,'1','1']

function unique(arr){
  for (let i = 0;i < arr.length; i++){
    for (let j = i+1; j < arr.length; j++){
      if (arr[i] === arr[j]){
        arr.splice(j,1)
        j--
      }
    }
  }
  return arr
}
console.log(unique(arr));
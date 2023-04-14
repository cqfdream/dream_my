let arr = [1,1,'1','1']

function unique(arr){
  // for (let i = 0;i < arr.length; i++){
  //   for (let j = i+1; j < arr.length; j++){
  //     if (arr[i] === arr[j]){
  //       arr.splice(j,1)
  //       j--
  //     }
  //   }
  // }

  let newArr = [...arr]
  newArr.soft((a,b) => a-b)//soft的时间复杂度是n*logn

  let res = []
  let seen;
    for (let i= 0; i < newArr.length; i++){
      if (newArr[i] !== seen){
        res.push(newArr[i])
      }
      seen = newArr[i]
    }

  // let res = []
  //   for (let i= 0; i < arr.length; i++){
  //     // for (var j=0 ;j<res.length;j++){
  //     //   if (arr[i]===res[j]){
  //     //     break //continue  
  //     //   }
  //     // }
  //     // if (j === res.length){
  //     //   res.push(arr[i])
  //     // }

  //     if (res.indexOf(arr[i] === -1)){
  //     //   res.push(arr[i])
  //     // }

  //   }
  return res
}
console.log(unique(arr));
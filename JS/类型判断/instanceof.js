function instance_of (L,R){
  let left = L._proto_
  let right = R.prototype

  while(left !== null){
    if (left === right) return true
    left = left._proto_
  }
  return false
}

instance_of([],)
// let arr = [1,2,3]


// {
//   val:1,
//   next:{
//     val:2,
//     next:{
//       val:3
//     }
    
//   }
// }

function ListNode(val){
  this.val=val
  this.next=null
}

const node = new ListNode(1)

node.next = new ListNode(2)

var mergeTwoLists = function(list1, list2) {
//创建一根链表
let head = new ListNode() //{val:0, next:null}

//判断 list1的val 和 list2 的val 谁更小
let current = head //{val : 0,next: {val: 1,next:...}}

while(list1&&list2){

if (list1.val <= list2.val){//先穿list1
  current.next = list1
  list1 = list1.next //{val:2,next:{...}}

}else{
current.next = list2
list2 = list2.next

}

current = current.next //{val: 1,next:...}
}
current.next = list1 !== null ? list1 : list2

return head.next 

//head.next = list1 || list2 的头节点
};
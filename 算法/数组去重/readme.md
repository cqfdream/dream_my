# 知识点总结

- break：终止当前循环      continue：终止这次循环，进入下一次循环

- arr.indexOf() 专门查找某一个元素的下标，如果有这个元素就返回它的下标，
如果没有这个元素就返回-1

- arr.push() 往数组末端加一个元素

-  arr = arr.soft() 将数组排序，默认为按照首字母的unicode编码值排列，返回的新数组元素会从小到大排。
　　　　　　　　　　　回调函数可以实现按你设置的规则排列　　　　　

    var arr = [1,21,15,2,3,4,5];
    console.log(arr.sort(function(a,b){
    return a-b; //设置规则 正序，    底层是arr[a] - arr[a+1]   > 0 ; 然后将其互换
    return b-a;  //  倒序    
    }));
　　console.log( "b".charCodeAt());  //获取元素的unicode编码

    这个方法的时间复杂度为 n*logn

- 一个循环的时间复杂度为n,如果里面嵌套了一个循环，那时间复杂度就是n*n
时间复杂度：同一级就相加，嵌套就相乘



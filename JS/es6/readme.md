- 请介绍下 var let const
    1. es6以前 用var声明变量 那时候没有常量
        let const 是es6(2015年以后)才有的变量和常量
    2. var let 变量声明
        const 常量 如果是复杂数据类型 值还是可以变的

    3. let 支持块级作用域
    4. var声明的变量会挂载在window 全局对象上 会污染
        let不会
        var 和 function写在全局作用域会覆盖、重写window的属性和方法，这是最不好的。let放在全局作用域也不会影响window对象
    5. var 声明的变量会提升到所在作用域的最上面(数据类型声明的提升，值不提升 undefined)不会报错
        会影响代码的可读性
        let 不会提升
        function 声明的函数 类型声明和值都会提升
        const func =function（）{}

    6. var 存在声明提升   let,const不存在声明提升
      - 暂时性死区：在块级作用域中，let
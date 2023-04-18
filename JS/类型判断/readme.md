# typeof 
- 能准确的判断除了null之外的所有的数据类型


# Object.prototype.toString
- Object.prototype.toString.call([]).slice(8, -1)

1. Object.prototype.toString.call(undefined) 
    "[object Undefined]"

2. Object.prototype.toString.call(null) 
    "[object Null]"

3. ToObject(this)

4. O = {
  [[class]]: Number
}

5. "[object" 和 class  和 "]"


# Array.isArray(arr)

# instanceof
 - [] instanceof Array
# async/await

- js 中存在异步概念



以前的接口请求：
1.new XMLHttpRequest()
2.ajax (jq)
3.fetach


- await 必须写在 async 函数里面
- await 后面接的逻辑必须返回一个promise对象
- 解决掉了promise的调用链问题，代码更优雅清晰
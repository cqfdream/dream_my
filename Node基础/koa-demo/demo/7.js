const  Koa = require('koa')


const app = new Koa()

const main = async (ctx) =>{
  if  (ctx.request.url === '/home'){
    //链接数据库，获取数据库
    ctx.body = 'hello home'
  }else if (ctx.request.url === '/user'){
    ctx.body = 'hello user'
  }else{
    ctx.body = 'hello world'
  }

}

app.use(main)

app.listen(3000,() =>{
  console.log('项目已启动在3000端口');
})
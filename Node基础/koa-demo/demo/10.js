const  Koa = require('koa')
const  router = require('koa-route')

const app = new Koa()

// const main = async (ctx) =>{
//   if  (ctx.request.url === '/home'){
//     //链接数据库，获取数据库
//     ctx.body = 'hello home'
//   }else if (ctx.request.url === '/user'){
//     ctx.body = 'hello user'
//   }else{
//     ctx.body = 'hello world'
//   }

// }
const home = (ctx) => {
  ctx.body = 'hello home'
}
const about = (ctx) => {
  ctx.response.redirect('/home')
  ctx.body = '<a href="/home">go home page</a>'
}

app.use(router.get('/home',home))
app.use(router.get('/about',about))



app.listen(3000,() =>{
  console.log('项目已启动在3000端口');
})
const  Koa = require('koa')
const fs = require('fs')

const app = new Koa()

const main = (ctx) =>{
  if  (ctx.request.url === '/home'){
    ctx.body = fs.createReadStream('./template.html')
  }
}

app.use(main)

app.listen(3000,() =>{
  console.log('项目已启动在3000端口');
})
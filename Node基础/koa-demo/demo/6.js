const  Koa = require('koa')
const fs = require('fs').promises

const app = new Koa()

const main = async (ctx) =>{
  if  (ctx.request.url === '/home'){
    ctx.response.type = 'html'
    ctx.body = await fs.readFile('./template.html')
  }
}

app.use(main)

app.listen(3000,() =>{
  console.log('项目已启动在3000端口');
})
const { log } = require('console')
const Koa = require('koa')
const fs = require('fs').promises
const path = require('path')

const app = new Koa()

const main = async (ctx) =>{// ctx ==context 代表 koa的上下文对象
  // console.log(path.join(__dirname,'template.html'));
  const url = path.join((__dirname,'template.html'))
  ctx.response.type = 'html'
  ctx.body = await fs.readFile(url)

}

app.use(main)

app.listen(3000,()=>{
console.log('项目已启动在3000端口');
})
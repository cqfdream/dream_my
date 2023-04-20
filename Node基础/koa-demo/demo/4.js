const Koa = require('koa')
const cors = require('@koa/cors');

const app = new Koa()

app.use(cors());
const main = (ctx) =>{// ctx ==context 代表 koa的上下文对象
  console.log(ctx.request.header.accept);

  if (ctx.request.accepts('html')){
    ctx.response.type = 'html'
    ctx.body = '<h2>hello world</h2>'

  }else if(ctx.request.accepts('json')){
    ctx.response.type = 'json'
    ctx.body = '{data: "hello world"}'

  }else{
    ctx.response.type = 'text'
    ctx.body =  "hello world"
  }

  // ctx.body = 'hello world'


}

app.use(main)

app.listen(3000,()=>{
console.log('项目已启动在3000端口');
})
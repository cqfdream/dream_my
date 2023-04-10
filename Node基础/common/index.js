var playerAction = process.argv[process.argv.length - 1]
const game = require('./lib')

// const result = game(playerAction)
// console.log(result);

// 获取进程的输入
let count = 0
process.stdin.on('data', function(e) {
  // console.log(e.toString().trim());  trim()去掉首尾的空格
  
  const playerAction = e.toString().trim()
  const result = game(playerAction)
  if (result === -1) {
    count++
  }
  if (count === 3) {
    console.log('我不跟你玩了');
    process.exit()
  }
})
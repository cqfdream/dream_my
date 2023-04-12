function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aa');
      resolve('1')
    }, 1000)
  })
}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => { // 异步代码
      console.log('bb');
      resolve('2')
    }, 2000)
  })
}

function c(data) {
  setTimeout(() => {
    console.log('cc', data);
  }, 500)
}

// a()
//   .then((res) =>{
//     console.log(res);
//     c()
//   })
//   .catch((err) => {
//     console.log(err, 'here');
//   })
//   .finally(() => {
//     c()
//   })

// Promise.all([a(), b()]).then(c)

// Promise.race([a(), b()]).then((res) => {
//   console.log(res);
//   c()
// })

// Promise.any([a(), b()])
// .then(c)
// .catch((err) => {console.log(err);})

Promise.resolve('ok').then((res) => {
  c(res)
})
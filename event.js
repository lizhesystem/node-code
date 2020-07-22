var events = require('events');
var ee = new events.EventEmitter();
var fs = require('fs');

// 监听事件 回调后可以来执行 传入data参数
ee.on('helloSuccess', function (data) {
  console.log('1吃夜宵');
  console.log(data.toString())
});
ee.on('helloSuccess', function () {
  console.log('2打游戏')
});
ee.on('helloSuccess', function () {
  console.log('3唱歌')
});
ee.on('helloSuccess', function () {
  console.log('4跳舞')
});


// fs.readFile('text.md', (err, data) => {
//   if (err) return console.error(err);
//   console.log(data.toString()); // 打印第一遍
//   ee.emit('helloSuccess', data)  // 使用emit触发 这样就不用在回调函数里写一堆东西了
// });

// 异步操作; 封装 async await
function readPromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) return reject(err);
      resolve(data)
      // ee.emit('helloSuccess',data)  // 使用emit触发 这样就不用在回调函数里写一堆东西了
    });
  })
}

// 异步调用
// readPromise('./text.md').then((data) => {
//   ee.emit('helloSuccess', data)
// });

// 使用async + await 来执行
async function run() {
  try {
    const data = await readPromise('./text.md');
    ee.emit('helloSuccess', data)
  } catch (err) {
    console.log(err)
  }
}

run();


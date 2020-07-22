const fs = require('fs');
// 读取流文件
let movie = fs.createReadStream('./movie.avi', {flags: 'r'});
// 边流--》边写 写入文件
let writeStream = fs.createWriteStream('./a.avi', {flags: 'w'});

// 打开读取文件
movie.on('open', () => {
  console.log('打开读取的文件')
});

// 读取流结束
movie.on('close', () => {
  console.log('读取流结束')
});

movie.on('end', () => {
  console.log('读取完成-->end')
});

movie.on('data', (chunk) => {
  console.log('单批数据流入' + chunk.length);
  console.log(chunk);
  // 边读边写
  // writeStream.write(chunk, () => {
  //   console.log('单批输入流入完成')
  // })
});

// 使用管道流 别人封装好的 连接 读和取~~   上面可以不注释。监控日志来用
movie.pipe(writeStream);



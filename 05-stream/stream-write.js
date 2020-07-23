let fs = require('fs');

// 创建写入流
let writeStream = fs.createWriteStream('hello.txt', {flags: 'w'});

// 监听文件打开和准备就绪
writeStream.on('open', () => {
  console.log('写入文件打开')
});

writeStream.on('ready', () => {
  console.log('写入文件准备')
});

// 监听文件关闭
writeStream.on('close', () => {
  console.log('写入文件关闭')
});

// 使用流的方式 一点点的写入文件
writeStream.write('hello Word1111!', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('写入成功111')
  }
});

writeStream.write('hello Word12222!', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('写入成功222')
  }
});

writeStream.write('hello Word13333!', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('写入成功333')
  }
});

let url = require('url');
// console.log(url);

const pathUrl = 'https://www.bilibili.com/video/BV1i7411G7kW?p=9';
let urlObj = url.parse(pathUrl);
console.log(urlObj);

// Url {
//   protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.bilibili.com',
//     port: null,
//     hostname: 'www.bilibili.com',
//     hash: null,
//     search: '?p=9',
//     query: 'p=9',
//     pathname: '/video/BV1i7411G7kW',
//     path: '/video/BV1i7411G7kW?p=9',
//     href: 'https://www.bilibili.com/video/BV1i7411G7kW?p=9'
// }

// 拼接
let a = 'http://www.baidu.com/';
let newURL = './static/pic1.png';
const l =  url.resolve(a,newURL);
console.log(l);  //http://www.baidu.com/static/pic1.png


let axios = require('axios');

axios.get('https://www.1905.com/vod/list/n_1_t_1/o3p1.html').then((res) => {
  console.log(res)
});

// 获取其实也没所有分类

// 获取分页
// 1:封装成Promise 获取数据
// 2:拿到数据正则 去找类目 看QQ截图
// 3:思路就是通过正则 根据需求获取对应的 数据

# 水印效果

## 目录

* [默认配置](#默认配置)
* [npm 引用](#npm引用)
* [AMD引入](#AMD引入)
* [CMD引入](#CMD引入)

### 默认配置

> 可修改

```json
  {
    text: 'www.test.com', // 水印文本
    font: '20px Times New Roman', // 字体
    rotateDegree: 30 * Math.PI / 180, // 旋转角度
    width: 200, // 宽
    height: 200, // 高
    // 样式
    style: {
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      position: 'fixed',
      'z-index': 1000
    }
  }
```

### npm引用

```shell
  yarn add watermark -S
  npm i watermark -S
```

### AMD引入

```javascript
import Watermark from 'watermark'
new Watermark().init({ text: '测试水印' })
```

### CMD引入

```javascript
// main.js
require.config({
    Watermark: path, // cdn路径
})

// app.js or 引用文件
define(['Watermark'], function (Watermark) {
    new Watermark().init({ text: '测试水印' })
})
```

### js 引入
```js
<script src="文件路径或者cdn 路径/index.min.js"></script>
<script>
  $(function(){
    new Watermark().init({ text: '测试水印' })
  })
</script>
```

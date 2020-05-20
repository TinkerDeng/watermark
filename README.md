# 水印效果

## 目录

* [构建](#构建)
* [js引入](#js引入)

### 构建

```shell
  npm i 
  npm run build
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

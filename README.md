# iGather

## nodejs采集集成命令

使用方法：

```javascript
// html格式文本 自动转化成jquery对象，使用方法同jquery
var gather = require('igather').html("http://baidu.com", function(err, $) {
    // code...
});
```

```javascript
// json格式文本 自动转化成json格式数据
var gather = require('igather').json("http://baidu.com", function(err, json) {
    // code...
});
```
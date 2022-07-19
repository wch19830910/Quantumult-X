/*  圈x配置写法
[rewrite_local]
#名字
(消息头中的Request URL )url script-response-body (js文件)

[MITM]
hostname:主机名

*/示例
[rewrite_local]
#很皮语音
^https:\/\/api3\.henpi\.vip\/app\/user\/get_userinfo url script-response-body hpyy.js

[MITM]
hostname:api3.henpi.vip





*/js文件

var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理



//示例3种模式

body = $response.body.replace(/\"a\":false/, "\"a\":true").replace(/\"b\":false/, "\"b\":true")//将a以及b由false改为true并以响应消息体赋值

obg.路径.a=true//将a修改为true
obj = {"a":{"b":{"c":"数值"}}};//将c修改数值


obj= {
  "a" : "2029-01-01T00:00:00Z",
  "b" : true,
  "c" : "premium",
  "d" : false
};//修改abcd的值






body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
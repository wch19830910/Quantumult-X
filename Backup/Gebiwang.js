const u = "http://www.gebi1.com/plugin.php?id=k_misign:sign&operation=qiandao&format=text&formhash=e3282fee";

const h = {
"Accept-Encoding" : "gzip, deflate",
"Cookie" : "NNpB_2132_connect_is_bind=1; NNpB_2132_lastact=1651538073%09plugin.php%09; NNpB_2132_sid=Z6Or1f; NNpB_2132_auth=6ccePbarTx2o%2FnKwr1uTEYPItH327pEP6cBQ3MNfnM0xAWO05IEidH4zunjeK33FTc6jQaPYaB%2FC%2B0ZtD29K097DdLk; NNpB_2132_checkfollow=1; NNpB_2132_lastcheckfeed=345748%7C1651538069; NNpB_2132_lip=36.227.219.149%2C1651537838; NNpB_2132_ulastactivity=508fsdzkCo9Be9PJMGiaXSQ%2FLJD2Xo7AWAHjE5Vi59wZXXGQJIX9; NNpB_2132_lastvisit=1651534451; NNpB_2132_saltkey=yxfry6Ff",
"Connection" : "keep-alive",
"Referer" : "http://www.gebi1.com/plugin.php?id=k_misign:sign&mobile=2",
"Accept" : "text/plain, */*; q=0.01",
"Host" : "www.gebi1.com",
"User-Agent" : "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
"Accept-Language" : "zh-CN,zh-Hans;q=0.9",
"X-Requested-With" : "XMLHttpRequest"
}; // 字典形式的请求头
          // 如果有Cookie的话一个就行，也就是{"Cookie":"123456"}

const m = "GET" //或者 "POST" 最常用就这两种

// POST的情况一般会有请求消息体，你也得去复制，可能是作为字符串也可能是字典形式的
// 那就再定义一个变量 const b = "字符串请求消息体" 或 {"A":"a", "B":"b" }


var myRequest = {url: u, method: m, headers: h };
    // 如果还定义了变量b的话就再加后面这对body:b的键值
    
    
$task.fetch(myRequest).then(response => { 
  console.log(response.statusCode + "\n\n" + response.body); 
  if(response.body.indexOf("今日已签") != -1){
    $notify("隔壁网", "今日签到成功", "成功👍")
  }else {
    $notify("今日隔壁网签到", "失败👇", "可能要更新一下请求头信息了")
  }  
    $done();
}
)

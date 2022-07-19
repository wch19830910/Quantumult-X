const u = "请求签到的链接";

const h = {"A":"a", "B":"b"} // 字典形式的请求头
          // 如果有Cookie的话一个就行，也就是{"Cookie":"123456"}

const m = "GET" //或者 "POST" 最常用就这两种

// POST的情况一般会有请求消息体，你也得去复制，可能是作为字符串也可能是字典形式的
// 那就再定义一个变量 const b = "字符串请求消息体" 或 {"A":"a", "B":"b" }


var myRequest = {url: u, method: m, headers: h, body: b};
    // 如果还定义了变量b的话就再加后面这对body:b的键值
    
    
$task.fetch(myRequest).then(response => {  
  if(response.body.indexOf("成功签到的响应消息体内的某个关键词") != -1){
    $notify("今日某app签到", "", "成功👍")
  }else {
    $notify("今日某app签到", "失败👇", "可能要更新一下请求头信息了")
  }  
}
)

const u = "https://www.haidan.video/signin.php";

const h = {"Accept": "*/*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-CN,zh-Hans;q=0.9","Connection": "keep-alive","Cookie": "c_secure_login=bm9wZQ%3D%3D; c_secure_pass=22037865e7c6f853468394f9500b35cf; c_secure_ssl=eWVhaA%3D%3D; c_secure_tracker_ssl=eWVhaA%3D%3D; c_secure_uid=NDM0ODM%3D","Host": "www.haidan.video","Referer": "https://www.haidan.video/index.php","User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1","X-Requested-With": "XMLHttpRequest"} // 字典形式的请求头
          // 如果有Cookie的话一个就行，也就是{"Cookie":"123456"}

const m = "GET" //或者 "POST" 最常用就这两种

// POST的情况一般会有请求消息体，你也得去复制，可能是作为字符串也可能是字典形式的
// 那就再定义一个变量 const b = "字符串请求消息体" 或 {"A":"a", "B":"b" }


var myRequest = {url: u, method: m, headers: h };
    // 如果还定义了变量b的话就再加后面这对body:b的键值
    
    
$task.fetch(myRequest).then(response => {  
  console.log(response.statusCode + "\n\n" + response.body);
  if(response.body.indexOf("已经打卡") != -1){
    $notify("海胆影视", "今日签到", "成功👍")
  }else {
    $notify("今日海胆影视签到", "失败👇", "可能要更新一下请求头信息了")
  }  
    $done();
}
)

const u = "https://napi.zuoyebang.com/napi/signin/checkin";

const m = "POST";

const h = {
"Accept" : "application/json, text/plain, */*",
"Origin" : "https://user-vue.zuoyebang.com",
"Accept-Encoding" : "gzip, deflate, br",
"Cookie" : "APP_VERSION=iPhone_13.34.0; IMEI=ad1443bf590ee74303149b0270014295ed99c8b3; RANGERS_SAMPLE=0.7985046545509087; RANGERS_WEB_ID=ad1443bf590ee74303149b0270014295ed99c8b3; TERMINAL=iPhone_ad1443bf590ee74303149b0270014295ed99c8b3; ZYBUSS=R2EYjrdcT-bdWLxEd_nra2QQBssb0UxMdRAIXZ7vZAcFi-13j8ONK3heee9v-qQ4; cuid=ad1443bf590ee74303149b0270014295ed99c8b3; extlbs=lbs; install_id=7273045463645358092; ttreq=1$b17551f65ee76861cdaf42063f99310433de0115; uuid=57dd2226da48d7aecaa5960b49934293",
"Content-Type" : "application/x-www-form-urlencoded",
"Host" : "napi.zuoyebang.com",
"Connection" : "keep-alive",
"User-Agent" : "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/613.1.17 (KHTML, like Gecko) Mobile/19E258 homework homework_vc/780 homework_vcname/13.34.0 homework_cuid/ad1443bf590ee74303149b0270014295ed99c8b3 homework_token/2_XPXQH3c5HRPtFHkSwi3sCCURmT25QfxM jsBridge_isNewJsBridge/1 jsBridge_vc/3.0.0 HyAppName/homework HySdkVer/1.4.2",
"Referer" : "https://user-vue.zuoyebang.com/",
"Accept-Language" : "zh-CN,zh-Hans;q=0.9"
};
   
const b = "hybrid=1&grade=2";

 var myRequest = {url: u, method: m, headers: h, body: b};
 

$task.fetch(myRequest).then(response => {
  console.log(response.statusCode + "\n\n" + response.body);
  
  if(response.body.indexOf("success") != -1){
    $notify("作业帮", "今日签到", "成功👍")
  }else {
    $notify("今日作业帮签到", "失败", "可能要更新一下cookie信息了")
  } 
  $done();  
}
)
//注释：const m ="POST"时 ；加上const b = "请求体" ; 在var myRequest加上body: b ；
//注释：const m ="GET"删掉const b ； body: b
//注释："里面"都是需要可以更改的内容
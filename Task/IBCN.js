
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = "https://dash.ibcn.space/user/checkin";
const method = "POST";
const headers = {
"Accept" : "application/json, text/javascript, */*; q=0.01",
"Accept-Encoding" : "gzip, deflate, br",
"Origin" : "https://dash.ibcn.space",
"Cookie" : "email=wch19830910%40126.com; expire_in=1653290111; ip=43a3cda656d21e3ea4eaa18fda865adb; key=db881cbd0e6d516a127b64411829c05a7d928e8aaa343; uid=37939; PHPSESSID=gfi78u46msqvs1m5v0uj680t9q; cf_clearance=KaEQX3DcK3aveumXghETJuV4hHplSQFh8zVIT9Y4seY-1653203671-0-250",
"Connection" : "keep-alive",
"Host" : "dash.ibcn.space",
"User-Agent" : "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
"Referer" : "https://dash.ibcn.space/user",
"Accept-Language" : "zh-CN,zh-Hans;q=0.9",
"X-Requested-With" : "XMLHttpRequest"
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    if(response.body.indexOf("获得") != -1){
    $notify("IBCN", "今日获得签到获得流量", "成功👍")
  }
  if(response.body.indexOf("已经签到") != -1){
    $notify("IBCN", "失败👇", "今日已经签过到")
  } 
    $done();

});

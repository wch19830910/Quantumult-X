const u = "签到抓取网址";

const m = "POST";

const h = {"Cookie": $prefs.valueForKey("cookie,key名称")};
   
const b = "请求体";

 var myRequest = {url: u, method: m, headers: h, body: b};
 

$task.fetch(myRequest).then(response => {
  
  if(response.body.indexOf("签到成功请求匹配值") != -1){
    $notify("今日XX签到", "", "成功")
  }if(response.body.indexOf("重复签到请求匹配值") != -1){
    $notify("今日XX已经签到过了", "", "")
  }else {
    $notify("今日XX签到", "失败", "可能要更新一下cookie信息了")
  }  
}
)
//注释：const m ="POST"时 ；加上const b = "请求体" ; 在var myRequest加上body: b ；
//注释：const m ="GET"删掉const b ； body: b
//注释："里面"都是需要可以更改的内容
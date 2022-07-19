if($request.url.indexOf("抓取签到网址选择某一个" && "抓取签到网址再选择一个") != -1){
getCookie("签到的APP名称", "要与签到脚本的cookie,key名称一致")}



function getCookie(name, key){
  var currentC = $request.headers.Cookie;
  var existC = key => $prefs.valueForKey(key);
  var create = (currentC, key) => $prefs.setValueForKey(currentC, key);
  if(currentC && existC(key)){
    currentC != existC(key) ?
    (create(currentC, key),
    $notify(name, "更新Cookie成功", "")) :
    console.log(name + "目前的cookie一致")
    }else{
        currentC != undefined ? 
        (create(currentC, key),
        $notify(name, "获取cookie成功", "")) : 
        $notify(name, "获取Cookie失败", "")
    }
}
$done({})
//注释：首先要在[rewrite_local]下添加 ^* url script-request-header cookie.js,抓取到cookie后用；注释掉
//注释：在[mitm]下hostname添加相关域名
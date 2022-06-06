#途虎养车获取cookie：途虎APP-我的-右上角签到领积分
#原始地址：https://raw.githubusercontent.com/photonmang/quantumultX/master/tuhu/tuhu.Cookie.js
#脚本地址：https://raw.githubusercontent.com/wch19830910/Quantumult-X/main/Code/tuhu-cookie.js?token=GHSAT0AAAAAABTFLOCYA5VSBWUFSBTGDSHGYU5KF3Qconst cookieName = '途虎养车'
const signurlKey = 'photonmang_signurl_tuhu'
const signheaderKey = 'photonmang_signheader_tuhu'
const photonmang = init()

if ($request && $request.method != 'OPTIONS') {
  const signurlVal = $request.url
  const signheaderVal = JSON.stringify($request.headers)
  if (signurlVal) photonmang.setdata(signurlVal, signurlKey)
  if (signheaderVal) photonmang.setdata(signheaderVal, signheaderKey)
  photonmang.msg(cookieName, `获取Cookie: 成功`, ``)
}

function init() {
  isSurge = () => {
    return undefined === this.$httpClient ? false : true
  }
  isQuanX = () => {
    return undefined === this.$task ? false : true
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
    if (isSurge()) {
      $httpClient.get(url, cb)
    }
    if (isQuanX()) {
      url.method = 'GET'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
photonmang.done()
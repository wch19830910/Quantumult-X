/*

cookie获取:Safari浏览器输入网址http://www.txtnovel.vip登录后点击我的，获取成功，即可注释点cookie获取脚本
[rewrite_local]
#书香门第Cookie
^http:\/\/www\.txtnovel\.vip\/home\.php\?mod=space&uid=4323223&do=profile&mobile=yes url script-request-header https://raw.githubusercontent.com/wch19830910/Quantumult-X/main/Task/www.txtnovel.vip/sxmdck.js

[task_local]
11 0 * * * https://raw.githubusercontent.com/wch19830910/Quantumult-X/main/Task/HMT/HMT1.js, tag=鹤鸣亭签到, img-url=https://raw.githubusercontent.com/wch19830910/wch/main/PNG/HMT.JPG, enabled=true
12 0 * * * https://raw.githubusercontent.com/wch19830910/Quantumult-X/main/Task/HMT/HMT2.js, tag=鹤鸣亭签到日志, img-url=https://raw.githubusercontent.com/wch19830910/wch/main/PNG/HMT.JPG, enabled=true

hostname = www.txtnovel.vip
*/

const cookieName = '书香门第'
const signurlKey = 'photonmang_signurl_SXMD'
const signheaderKey = 'photonmang_signheader_SXMD'
const photonmang = init()

if ($request && $request.method != 'wch19830910') {
  const signurlVal = $request.url
  const signheaderVal = JSON.stringify($request.headers)
  if (signurlVal) photonmang.setdata(signurlVal, signurlKey)
  if (signheaderVal) photonmang.setdata(signheaderVal, signheaderKey)
  photonmang.msg(cookieName, `获取Cookie: ✅成功`, ``)
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
/*

cookie获取:打开app，我的，点击等级获取成功，即可注释点cookie获取脚本
[rewrite_local]
#获取鹤鸣亭Cookie
^https:\/\/qfapi\.hmting\.com\/store\/grade\/grade-list url script-request-header https://raw.githubusercontent.com/wch19830910/Quantumult-X/main/Task/HMT/HMTCK.js

[task_local]
11 0 * * * https://raw.githubusercontent.com/wch19830910/Quantumult-X/main/Task/HMT/HMT1.js, tag=鹤鸣亭签到, img-url=https://raw.githubusercontent.com/wch19830910/wch/main/PNG/HMT.JPG, enabled=true
12 0 * * * https://raw.githubusercontent.com/wch19830910/Quantumult-X/main/Task/HMT/HMT2.js, tag=鹤鸣亭签到日志, img-url=https://raw.githubusercontent.com/wch19830910/wch/main/PNG/HMT.JPG, enabled=true

hostname = qfapi.hmting.com
*/

const cookieName = '鹤鸣亭'
const signurlKey = 'photonmang_signurl_HMT'
const signheaderKey = 'photonmang_signheader_HMT'
const photonmang = init()

if ($request && $request.method != 'OPTIONS') {
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

/*

cookie获取:打开app，我的，点击等级获取成功，即可注释点cookie获取脚本
[rewrite_local]
#获取作业帮Cookie
^https:\/\/napi\.zuoyebang\.com\/napi\/signin\/checkin url script-request-header https://raw.githubusercontent.com/wch19830910/Quantumult-X/main/Task/zuoyebang/zyb.js

hostname = napi.zuoyebang.com

*/


const cookieName = '作业帮'
const signurlKey = 'photonmang_signurl_ZYB'
const signheaderKey = 'photonmang_signheader_ZYB'
const photonmang = init()
const signurlVal = photonmang.getdata(signurlKey)
const signheaderVal = photonmang.getdata(signheaderKey)


sign()  //签到


function sign() {
  const url = { url: `https://napi.zuoyebang.com/napi/signin/checkin`, bodys: JSON.parse(signheaderVal) }
  url.body = '{}'
  photonmang.post(url, (error, response, data) => {
    photonmang.log(`${cookieName}, data: ${data}`)
    const title = `${cookieName}`
    let subTitle = ''
    let detail = ''
    const result = JSON.parse(data)
    if (result.errstr == success) {
      subTitle = `签到结果: ✅签到成功`
      detail += `本月签到: ${result.special_days}天`
    } else if (result.checkin_status ==1 ) {
      subTitle = '签到结果: 成功 (重复签到)'
      detail += `❌: ${result.text}`
      } else {
      subTitle = '签到结果: 失败'
      detail = `编码: ${result.text}, 说明: ${result.msg}`
      }
       
    photonmang.msg(title, subTitle, detail)
    photonmang.done()
  })
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

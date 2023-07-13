/*

cookie获取:打开app，我的，点击等级获取成功，即可注释点cookie获取脚本
[rewrite_local]
#获取鹤鸣亭Cookie
^https:\/\/qfapi\.hmting\.com\/store\/grade\/grade-list url script-request-header https://raw.githubusercontent.com/wch19830910/Quantumult-X/main/Task/HMT/HMTCK.js

[task_local]
11 0 * * * https://raw.githubusercontent.com/wch19830910/Quantumult-X/main/Task/HMT/HMT1.js, tag=鹤鸣亭签到, img-url=https://raw.githubusercontent.com/wch19830910/wch/main/PNG/HMT.JPG, enabled=true
12 0 * * * https://raw.githubusercontent.com/wch19830910/Quantumult-X/main/Task/HMT/HMT2.js, tag=鹤鸣亭签到日志, img-url=https://raw.githubusercontent.com/wch19830910/wch/main/PNG/HMT.JPG, enabled=true
*/

const cookieName = '鹤鸣亭'
const signurlKey = 'photonmang_signurl_HMT'
const signheaderKey = 'photonmang_signheader_HMT'
const photonmang = init()
const signurlVal = photonmang.getdata(signurlKey)
const signheaderVal = photonmang.getdata(signheaderKey)


sign()  //签到


function sign() {
  const url = { url: `https://qfapi.hmting.com/store/assign/index`, headers: JSON.parse(signheaderVal) }
  url.body = '{}'
  photonmang.post(url, (error, response, data) => {
    photonmang.log(`${cookieName}, data: ${data}`)
    const title = `${cookieName}`
    let subTitle = ''
    let detail = ''
    const result = JSON.parse(data)
    if (result.ret == 0) {
      subTitle = `签到结果: ✅签到成功`
      detail += `连续签到: ${result.data.assign.continue_days}天, 总签到: ${result.data.statistics.total_days}天`
    } else if (result.code == 700) {
      subTitle = '签到结果: 成功 (重复签到)'
      detail = `说明: ${result.msg}`
      } else {
      subTitle = '签到结果: 失败'
      detail = `编码: ${result.code}, 说明: ${result.msg}`
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

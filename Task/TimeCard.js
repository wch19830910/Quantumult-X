/*
 * 本脚本是假日倒计时，支持Surge(Panel,Cron),Stash(Tile,Cron),Loon,QuantumultX,Shadowrocket
 * @作者：@zqzess，@GN006
 *感谢@chavyleung提供的Env
 * 本地修改你想要的日期，或者自己建库
 * 可订阅BoxJS添加自定义日期 https://raw.githubusercontent.com/Toperlock/Quantumult/main/boxjs.json
 * 定时任务添加： 0 8 * * * https://raw.githubusercontent.com/Toperlock/Quantumult/main/task/TimeCard.js, tag=节假提醒, img-url=https://raw.githubusercontent.com/Toperlock/Quantumult/main/icon/date.png,enabled=true
 * 申明：部分函数方法来源于TimeCard.js，其原始作者@smartmimi
 */

const $ = new Env('DaysMatter', true)
let title = '📅 倒数日'
让 url = 'https://raw.githubusercontent.com/zqzess/openApiData/main/calendar/cnholiday2.json'
让选项= {
    网址： 网址，
    标头：{}
}
让 nowDate = new Date().toLocaleDateString()
让年份 = nowDate.split('/')[0]
// 各日期区分开方便日后分隔放假通知与倒数日通知
let HolidayData = $.getjson('@DaysMatter.holidayData', null) // 法定节假日，放假的那种
let daysData = [] // 节日集合，包含节日假日，内置假日，用户假日（固定+浮动）
let userDays = $.getdata('@DaysMatter.userDays') // 用户固定假日
让 userDaysName = $.getdata('@DaysMatter.userDaysName')
let userDays2 = $.getdata('@DaysMatter.userDays2') // 用户浮动假日
让 userDaysName2 = $.getdata('@DaysMatter.userDaysName2')
let userDaysData = $.getjson('@DaysMatter.userDaysData', {'list': []}) // 备用变量
// 内置假日
让默认日期数据 =
    [
        {'date': '2023-5-14', 'name': '母亲节'},
        {'date': '2023-6-18', 'name': '父亲节'},
        {'日期': '2023-7-26', '姓名': '妈妈生日'},
        {'日期': '2023-7-29', '姓名': '外公生日'},
        {'日期': '2023-8-5', '姓名': '老婆生日'},
        {'日期': '2023-8-22', '姓名': '七夕'},
        {'日期': '2023-9-18', '姓名': '自己生日'},
        {'date': '2023-12-24', 'name': '平安夜'},
        {'date': '2024-1-18', 'name': '腊八节'},
        {'日期': '2024-2-2', '姓名': '小年'},
        {'日期': '2024-2-9', '姓名': '除夕'}
    ]

让 tnow = 新日期()
让 tnowf = tnow.getFullYear() + "-" + (tnow.getMonth() + 1) + "-" + tnow.getDate()
让 dateDiffArray = []

开始工作（）

异步函数 startWork() {
    等待 setHoliDayData()
    让 nowlist = now();
    $.log('最近离开的节日：' + daysData[nowlist].name)
    let notificationContent = dateDiffArray[0].name + ":" + 今天(tnumCount(0)) + "," + dateDiffArray[Number(0) + Number(1)].name + ":" + tnumCount(Number(0) + Number(1)) + "天," + dateDiffArray[Number(0) + Number(2)].name + ":" + tnumCount(Number(0) + Number(2)) + "天"
    $.isSurge() ？身体={
        标题： title_random(tnumCount(Number(0))),
        内容：通知内容，
        图标： icon_now(tnumCount(Number(0))),
        '图标颜色': '#5AC8FA'
    } : 正文 = {
        标题： title_random(tnumCount(Number(0))),
        内容：通知内容，
        图标： icon_now(tnumCount(Number(0))),
        背景颜色：'#339900'
    }
    $.msg(标题, '', 通知内容)
    $.log('\n面板显示内容：\n' + notificationContent)
    $.isSurge || $.isStash ？$.done(body) : $.done()
}

异步函数 setHoliDayData() {
    if (holidayData === null || HolidayData.year !== 年) {
        等待 $.http.get(option).then(function (response) {
            让 jsonObj = JSON.parse(response.body)
            让结果 = jsonObj.data[0].holiday
            结果.forEach(函数(i) {
                if (i.year === 年) {
                    假期数据 = i
                    $.setjson(i, '@DaysMatter.holidayData')
                }
            })
        })
    }
    daysData = daysData.concat(holidayData.list) // 法定节假日并入假日集合
    让清除标志 = false
    // 如果用户填写了固定日期，就解析并加入节日集合，如公历生日，每年都一样的，所以填入月份和日即可，3-1。会自动解析并加入当前年份
    if (userDays !== '' && userDays !== 未定义 && userDays !== null && userDaysName !== '' && userDaysName !== 未定义 && userDaysName !== null) {
        userDays = userDays.replace(/，/g, ',')
        userDaysName = userDaysName.replace(/，/g, ',')
        让 userDaysArray = userDays.split(',')
        让 userDaysNameArray = userDaysName.split(',')
        if (userDaysArray.length !== userDaysNameArray.length) {
            $.msg(title, '❌错误', '用户填写固定日期和名称没有答案')
        } 别的 {
            用户天数数据 = []
            for (让 i 进入 userDaysArray) {
                userDaysArray[i] = userDaysArray[i].replace(/\./g, '-').replace(/\//g, '-').replace(/。/g, '-').replace(/年/g, '-').replace(/月/g, '-').replace(/日/g, '').replace(/号/g, '')
                // 如果用户填写的是浮动日期，此处与下面的重复了，目前设计是浮动日期和固定日期分开填写，优先情况可视情况合并（删除下面）
                if (userDaysArray[i].split('-').length > 2) {
                    daysData.push({'date': userDaysArray[i], 'name': userDaysNameArray[i]})
                    userDaysData.push({'date': userDaysArray[i], 'name': userDaysNameArray[i]}) // 此备用变量
                } else if (userDaysArray[i].split('-').length === 2) { // 用户填写的是固定日期
                    daysData.push({'日期': 年 + '-' + userDaysArray[i], '名称': userDaysNameArray[i]})
                    userDaysData.push({'date':year + '-' + userDaysArray[i], 'name': userDaysNameArray[i]}) // 此变量备用
                }
            }
            $.setjson(userDaysData, '@DaysMatter.userDaysData')
            清除标志 = true
        }
    }

    // 如果用户填写了浮动日期，如母亲节每年5月第二周日这种，需要填入年份2024-5-4
    if (userDays2 !== '' && userDays2 !== 未定义 && userDays2 !== null && userDaysName2 !== '' && userDaysName2 !== 未定义 && userDaysName2 !== null) {
        userDays2 = userDays2.replace(/，/g, ',')
        userDaysName2 = userDaysName2.replace(/，/g, ',')
        让 userDaysArray = userDays2.split(',')
        让 userDaysNameArray = userDaysName2.split(',')
        if (userDaysArray.length !== userDaysNameArray.length) {
            $.msg(title, '❌错误', '用户填写的浮动日期和名称没有答案')
        } 别的 {
            如果（！clearFlag）{
                用户天数数据 = []
            }
            for (让 i 进入 userDaysArray) {
                // 如果用户填写的是浮动日期
                userDaysArray[i] = userDaysArray[i].replace(/\./g, '-').replace(/\//g, '-').replace(/。/g, '-').replace(/年/g, '-').replace(/月/g, '-').replace(/日/g, '').replace(/号/g, '')
                控制台.log(userDaysArray[i])
                if (userDaysArray[i].split('-').length > 2) {
                    daysData.push({'date': userDaysArray[i], 'name': userDaysNameArray[i]})
                    userDaysData.push({'date': userDaysArray[i], 'name': userDaysNameArray[i]}) // 此备用变量
                }
            }
            $.setjson(userDaysData, '@DaysMatter.userDaysData')
        }
    }
    if (defaultDaysData.length > 0) {
        defaultDaysData.forEach(函数(日){
            day.date = day.date.replace(/\./g, '-').replace(/\//g, '-').replace(/。/g, '-').replace(/年/g, '-').replace(/月/g, '-').replace(/日/g, '').replace(/号/g, '')
            if(day.date.split('-').length === 2)
            {
                日.日期 = 年 + '-' + 日.日期
            }
        })
        daysData = daysData.concat(defaultDaysData)
    }
    console.log('节日集合：')
    daysData.forEach(函数 (i) {
        控制台.log(i)
    })
    // 控制台.log(daysData)
}

/* 计算2个日期外的天数，不包含今天，如：2016-12-13到2016-12-15，外2天
 * @param 开始日期字符串
 * @参数结束日期字符串
 * @返回
 */
函数 dateDiff(startDateString, endDateString) {
    让分隔符=“-”；//日期分隔符
    让 startDates = startDateString.split(分隔符);
    让 endDates = endDateString.split(分隔符);
    让 startDate = new Date(startDates[0], startDates[1] - 1, startDates[2]);
    让 endDate = new Date(endDates[0], endDates[1] - 1, endDates[2]);
    返回 parseInt((结束日期 - 开始日期) / 1000 / 60 / 60 / 24).toString();
}

//计算输入序号对应的时间与现在的天数间隔
函数 tnumCount(num) {
    返回 dateDiff(tnowf, dateDiffArray[num].date);
}

//获取最接近的日期
现在函数（）{
    让 tmp = 400
    让res = 0
    for (让 i = 0; i < daysData.length; i++) {
        让 key = Number(dateDiff(tnowf, daysData[i].date))
        如果（键> = 0）{
            dateDiffArray.push({'date': daysData[i].date, 'name': daysData[i].name, 'key': key})
        }
        if (key >= 0 && tmp > key) {
            // 上面的思路是对差值排序，找到一个，即日期差最小
            tmp = 键
            分辨率=我
        }
    }
    dateDiffArray = mergeSort(dateDiffArray) // 对集合排序
    返回资源
}

// 归并排序，速度更快
函数合并排序（列表）{
    常量rec = arr => {
        if (arr.length === 1) 返回 arr
        const mid = arr.length >> 1
        const left = arr.slice(0, mid)
        const right = arr.slice(mid)
        const arr1 = rec(左)
        const arr2 = rec(右)
        令 i = 0，j = 0
        让资源 = []
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i].key < arr2[j].key) {
                res.push(arr1[i++])
            } 别的 {
                res.push(arr2[j++])
            }
        }
        if (i < arr1.length) res = res.concat(arr1.slice(i))
        if (j < arr2.length) res = res.concat(arr2.slice(j))
        返回资源
    }
    返回记录（列表）
}


今天函数（日）{
    让daythis = day;
    if (daythis === "0") {
        日期通知（）；
        返回“🎉”；
    } 别的 {
        return daythis + "天";
    }
}

函数日期通知（）{
    if ($.getdata("@DaysMatter.DaysMatterPushed") !== dateDiffArray[0].date && tnow.getHours() >= 6) {
        $.setdata(dateDiffArray[0].date, "@DaysMatter.DaysMatterPushed");
        $.msg("节日祝福", "", "今天是" + dateDiffArray[0].date + "日 " + dateDiffArray[0].name + " 🎉")
    } else if ($.getdata("@DaysMatter.DaysMatterPushed") === dateDiffArray[0].date) {
        //console.log("当日已通知");
    }
}

//> 图标依次切换乌龟、兔子、礼品、礼品盒
函数 icon_now(num) {
    if (num <= 7 && num > 3) {
        返回“野兔”
    } 否则 if (num <= 3 && num > 0) {
        返回“计时器”
    } 否则如果 (num === 0) {
        返回“礼物”
    } 别的 {
        返回“乌龟”
    }
}

函数标题_随机（数字）{
    让 r = Math.floor((Math.random() * 10) + 1);
    让迪克 = {
        1: "距离放假，还要摸鱼多少天？",
        2: "坚持住，就快放假啦！",
        3:“上班好累呀，下顿吃啥？”,
        4: "努力，我还能加班24小时！",
        5: "今日宜：吃饭忌：减肥",
        6: "躺平中，等放假",
        7：“只有摸鱼才赚老板的钱”，
        8: "一起摸鱼吧",
        9：“摸鱼中，期待下一个节日”，
        10：《小乌龟慢慢爬》
    };
    返回数字 === 0 ？"节日快乐，万事大吉" : dic[r]
}

// https://github.com/chavyleung/scripts/blob/master/Env.min.js
/************************************ API **************************************/
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { 网址：t }：t；让 s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module. 导出 } isQuanX() { 返回“未定义” != typeof $task } isSurge() { 返回“未定义” != typeof $httpClient && “undefined” == typeof $loon } isLoon() { 返回“未定义” != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) {尝试 { 返回 JSON.stringify(t) } catch { 返回 e } } getjson(t, e) { 让 s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript (t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : 我; 让 r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.超时？e.超时：r；const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { 这个.fs = 这个.fs ？this.fs : require("fs"), this.path = this.path ？this.path : require("路径"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) 返回 {}; { 常量 i = s ? t : e; 尝试 { 返回 JSON.parse(this.fs. readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ？this.path : require("路径"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); 是？this.fs.writeFileSync(t, r) : 我？this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); 令 r = t；for (const t of i) if (r = Object(r)[t], void 0 === r) return s; 返回 r } lodash_set(t, e, s) { 返回 Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => 对象(t[s]) === t[s] ？t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ？[] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { 让 e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? “空”=== o？空：o || “{}”：“{}”；尝试 { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); 返回 s } getval(t) { 返回这个。isSurge() || this.isLoon() ？$persistentStore.read(t) : this.isQuanX() ？$prefs.valueForKey(t) : this.isNode() ？(this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ？$persistentStore.write(t, e) : this.isQuanX() ？$prefs.setValueForKey(t, e) : this.isNode() ？(this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ？this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ？this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (删除 t.headers["Content-Type"], 删除 t.headers["Content-Length"]), this.isSurge() || this.isLoon() ？(this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ？(this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { 提示: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t. headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message : s, 响应: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && 删除 t.headers["Content -Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t. headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { 提示: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s,状态代码：i，标头：r，正文：o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t ) { 让 e = { "M+": (新日期).getMonth() + 1, "d+": (新日期).getDate(), "H+": (新日期).getHours(), "m+": (新日期).getMinutes(), "s+": (新日期).getSeconds(), "q+": Math.floor(((新日期).getMonth() + 3) / 3), S: (新日期).getM毫秒() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) 返回 this.isLoon() ？t : this.isQuanX() ？{“open-url”：t}：this.isSurge（）？{ 网址：t }：无效0；if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["媒体网址"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["媒体网址"] || t.mediaUrl；return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["打开网址"]; 返回 { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); 让 h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs. concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); 是？this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) } isSurge() && !this.isQuanX() && !this.isLoon(); 是？this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) } isSurge() && !this.isQuanX() && !this.isLoon(); 是？this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) } s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) } s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
/************************************************************************************/

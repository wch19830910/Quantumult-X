/*
作业帮学分签到
作者：photonmang
制作时间：2021/04/07

[mitm]
hostname = napi.zuoyebang.com
#圈x
[rewrite local]
https://napi.zuoyebang.com/napi/signin/signinpage url script-request-body https://raw.githubusercontent.com/photonmang/quantumultX/master/Task/zyb.js

---------------------------------------
Cookie获取方式：
首页=>签到领学分
*/

const photonmang = '作业帮'
const $ = Env(photonmang)
const notify = $.isNode() ? require('./sendNotify') : '';
let status;
status = (status = ($.getval("azybstatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
const azyburlArr = [], azybArr = []
let azyb = $.getdata('azyb')
let azybbody = $.getdata('azybbody')
let tz = ($.getval('tz') || '1');//0关闭通知，1默认开启
const logs = 0;//0为关闭日志，1为开启
var hour = ''
var minute = ''
if ($.isNode()) {
    hour = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).getHours();
    minute = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).getMinutes();
} else {
    hour = (new Date()).getHours();
    minute = (new Date()).getMinutes();
}
//CK运行
let isazybck = typeof $request !== 'undefined'
if (isazybck) {
    azybck();
    $.done()
}
if ($.isNode()) {
    if (process.env.azybURL && process.env.azybURL.indexOf('#') > -1) {
        azyburl = process.env.azybURL.split('#');
        console.log(`您选择的是用"#"隔开\n`)
    }
    else if (process.env.azybURL && process.env.azybURL.indexOf('\n') > -1) {
        azyburl = process.env.azybURL.split('\n');
        console.log(`您选择的是用换行隔开\n`)
    } else {
        azyburl = process.env.azybURL.split()
    };
    if (process.env.azyb && process.env.azyb.indexOf('#') > -1) {
        azyb = process.env.azyb.split('#');
        console.log(`您选择的是用"#"隔开\n`)
    }
    else if (process.env.azyb && process.env.azyb.indexOf('\n') > -1) {
        azyb = process.env.azyb.split('\n');
        console.log(`您选择的是用换行隔开\n`)
    } else {
        azyb = process.env.azyb.split()
    };
    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
} else {
    azyburlArr.push($.getdata('azyburl'))
    azybArr.push($.getdata('azyb'))
    let zybcount = ($.getval('azybcount') || '1');
    for (let i = 2; i <= zybcount; i++) {
        azyburlArr.push($.getdata(`azyburl${i}`))
        azybArr.push($.getdata(`azyb${i}`))
    }
}
!(async () => {
    if (!azyburlArr[0] && !azybArr[0]) {
        $.msg($.name, '【提示】请先获取58同城一cookie')
        return;
    }
    console.log(`------------- 共${azybArr.length}个账号----------------\n`)
    for (let i = 0; i < azybArr.length; i++) {
        if (azybArr[i]) {
            message = ''
            azyburl = azyburlArr[i];
            azyb = azybArr[i];
            $.index = i + 1;
            console.log(`\n开始【作业帮${$.index}】`)

            await signinpage()
            await showmsg()
        }
    }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())

//获取cookie   
function azybck() {
    if ($request && $request.url.indexOf("signinpage") >= 0) {
        const azyb = JSON.stringify($request.headers)
        if (azyb) $.setdata(azyb, `azyb${status}`)
        $.log(`[${photonmang}] header请求: 成功,azyb: ${azyb}`)
        $.msg(`[${photonmang}] header${status}: 成功🎉`, ``)
		const zybbody = JSON.stringify($request.body)
		if (azybbody) $.setdata(azybbody, `azybbody${status}`)
        $.log(`[${photonmang}] body请求: 成功,azybbody: ${azyb}`)
        $.msg(`[${photonmang}] body${status}: 成功🎉`, ``)
    }
}



//学分签到
async function signinpage() {
    return new Promise((resolve) => {
        let signinpage_url = {
            url: `https://napi.zuoyebang.com/napi/signin/signinpage`,
            headers: JSON.parse(zyb),
            body: zybbody
        }
        $.post(signinpage_url, async (error, response, data) => {
            try {
                if (error) {
                    console.log("⛔️API查询请求失败❌ ‼️‼️");
                    console.log(JSON.stringify(error));
                    $.logErr(error);
                } else {
                    const result = JSON.parse(data)
                    if (logs) $.log(data)
                    if (result.data.awards_tomorrow != 0) {
                        message = `【签到成功】: ✅${result.data.awards_today_coin}学分\n`+
			          ` 签到第${result.data.continue_days}天,${result.data.continue_days_content}`
                    } else {
                        message = `【签到失败】: 🔁重复签到\n`

                    }
                }
            } catch (e) {
                $.logErr(e, response);
            } finally {
                resolve();
            }
        })
    })
}


//showmsg
async function showmsg() {
    if (tz == 1) {
        if ($.isNode()) {
            await notify.sendNotify($.name, message)
        } else {
            $.msg(photonmang, '', message)
        }
    } else {
        console.log(message)
    }
}
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch{return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch{return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch{} return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch{return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const {statusCode: s, statusCode: i, headers: r, body: o} = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const {statusCode: s, statusCode: i, headers: r, body: o} = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const {message: s, response: i} = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const {statusCode: s, statusCode: i, headers: r, body: o} = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const {url: s, ...i} = t; this.got.post(s, i).then(t => { const {statusCode: s, statusCode: i, headers: r, body: o} = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const {message: s, response: i} = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }

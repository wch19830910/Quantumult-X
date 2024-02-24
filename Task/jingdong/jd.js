const $ = new Tool('手机京东');

try {
    const { headers, method, url, body } = $request;
    const { Cookie, Authorization } = headers;
    if (method === 'POST') {
        // 刷新Cookie过期时间的接口
        if (url.includes('https://api.m.jd.com')) {
            if (!Authorization) {
                $.log(`获取Cookie失败：${JSON.stringify(headers)}`);
                $.notify(`Cookie获取失败！`);
            } else {
                $.setStore('MJD_URL_REFRESH', url);
                $.setStore('MJD_BODY_REFRESH', body);
                $.setStore('MJD_HEADERS_REFRESH', headers);
                $.log(
                    `headers：${JSON.stringify(
                        headers
                    )}\nurl：${url}\nbody：${body}`
                );
            }
        } else {
            if (!Cookie || !Authorization) {
                $.log(`获取Cookie失败：${JSON.stringify(headers)}`);
                $.notify(`Cookie获取失败！`);
            } else {
                const bodyArr = decodeURIComponent(body).split('&');
                const params = {};
                for (let i = 0; i < bodyArr.length; i++) {
                    const item = bodyArr[i];
                    const keyVal = item.split('=');
                    params[keyVal[0]] = keyVal[1];
                }
                $.setStore('MJD_URL', url);
                $.setStore('MJD_BODY', params);
                $.setStore('MJD_HEADERS', headers);
                $.log(
                    `headers：${JSON.stringify(
                        headers
                    )}\nurl：${url}\nparams：${JSON.stringify(params)}`
                );
            }
        }
        let WPH_URL = $.getStore('MJD_URL');
        let WPH_BODY = $.getStore('MJD_BODY');
        let WPH_HEADERS = $.getStore('MJD_HEADERS');
        let WPH_URL_REFRESH = $.getStore('MJD_URL_REFRESH');
        let WPH_BODY_REFRESH = $.getStore('MJD_BODY_REFRESH');
        let WPH_HEADERS_REFRESH = $.getStore('MJD_HEADERS_REFRESH');
        if (
            MJD_URL &&
            MJD_BODY &&
            MJD_HEADERS &&
            MJD_URL_REFRESH &&
            MJD_BODY_REFRESH &&
            MJD_HEADERS_REFRESH
        ) {
            $.notify(`Cookie写入成功！`);
        }
    }
} catch (error) {
    $.log(
        `Error：\n${typeof error === 'object' ? JSON.stringify(error) : error}`
    );
}
$.done();

// prettier-ignore
function Tool(t="📣📣📣"){const e="undefined"!=typeof module&&!!module.exports&&"node",o="undefined"!=typeof $task&&"quanx",s="undefined"!=typeof $httpClient&&"surge",r=e||o||s;this.title=t;const i=t=>(t&&(t.status?t.statusCode=t.status:t.statusCode&&(t.status=t.statusCode)),t),n=(t,e)=>{$.log(`${t}：${e}`);try{e=JSON.parse(e)}catch(t){}return e},a=()=>{let{localStorage:t,fetch:e}=this;if(!t){let e=require("node-localstorage").LocalStorage;const o=new e("./store");t=o}if(!e){const t=(...t)=>import("node-fetch").then(({default:e})=>e(...t));e=t}return{localStorage:t,fetch:e}};this.log=(t=>{"object"==typeof t?console.log(`\n${JSON.stringify(t)}`):console.log(`\n${t}`)}),this.request=(async t=>{if(o)try{const e=await $task.fetch(t),{status:o,body:s}=i(e);return 200!==o?Promise.reject(e):Promise.resolve(s)}catch(t){return this.log(`接口响应错误：\n${t}\n${JSON.stringify(t)}`),Promise.reject(t)}if(s)return new Promise((e,o)=>{const{method:s}=t;$httpClient[s.toLowerCase()](t,(t,s,r)=>{if(t)return o(t);const{status:n}=i(s);return 200!==n?o(s):e(r)})});if(e){const{localStorage:e,fetch:o}=a();try{const{url:e,...s}=t,r=await o(e,s),{status:n}=i(r),a=s.headers.contentType,l="text/html"===a?await r.text():await r.json();return 200!==n?Promise.reject(l):Promise.resolve(l)}catch(t){return this.log(`接口响应错误：\n${t}\n${JSON.stringify(t)}`),Promise.reject(t)}}}),this.done=((t={})=>{(o||s)&&$done(t),e&&this.log(t)}),this.wait=(t=>new Promise(e=>{setTimeout(()=>{e(!0)},1e3*t||2e3)})),this.notify=((t="",r="")=>{o&&$notify(this.title,t,r),s&&$notification.post(this.title,t,r),e&&this.log(`${this.title}\n${t}\n${r}`)}),this.getStore=(t=>{if(o)return n(t,$prefs.valueForKey(t));if(s)return n(t,$persistentStore.read(t));if(e){const{localStorage:e,fetch:o}=a();let s=e.getItem(t);return n(t,s)}}),this.setStore=((t,r)=>{if("object"==typeof r&&(r=JSON.stringify(r)),o&&$prefs.setValueForKey(r,t),s&&$persistentStore.write(r,t),e){const{localStorage:e,fetch:o}=a();e.setItem(t,r)}}),this.log(`脚本应用：${this.title}\n脚本环境：${r}`)}

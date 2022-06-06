
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://app.myyancheng.com.cn/api/cs/appVersion/getSkinConfigInfo`;
const method = `POST`;
const headers = {
'x-os-version' : `15.4.1`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'x-net-type' : `2`,
'x-app-name' : `com.pingan.wdyc`,
'Content-Type' : `application/json`,
'x-app-platform' : `iPhone 12 Pro`,
'User-Agent' : `YCSMT/2.2.3 (iPhone; iOS 15.4.1; Scale/3.00)`,
'token' : `FD400A562D624DBAB71A8D8AA4990B561622870875006`,
'Host' : `app.myyancheng.com.cn`,
'x-os-type' : `1`,
'x-app-version' : `2.2.3`,
'Accept-Language' : `zh-Hans-CN;q=1`,
'Accept' : `*/*`,
'x-channel' : `AppStore`
};
const body = `{"appId":"com.pingan.wdyc","configItems":[{"configId":"ycsc.skin.operation","configVersion":"0.0"}],"testFlag":"0","appVersion":"2.2.3","userInfo":{"phoneNumber":"18012505969"},"platform":{"osType":"iOS","osVersion":"15.4.1","deviceModel":"Unknown Model"}}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.body);
    $notify("我的盐城","今日已签到",response.body)
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});


/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `http://hybrid.ximalaya.com/web-activity/signIn/v2/signIn`;
const method = `POST`;
const headers = {
'Cookie' : `domain=.ximalaya.com; path=/; channel=ios-b1; 1&_device=iPhone&B0B0973D-83BA-4138-94DB-9992E2628C52&9.0.28; impl=com.gemd.iting; NSUP=42F056E4%2C42058275%2C1649556768474; XUM=B0B0973D-83BA-4138-94DB-9992E2628C52; c-oper=%E7%94%B5%E4%BF%A1; net-mode=WIFI; res=1170%2C2532; 1&_token=114564078&F50179E0240C225CC25DD8D7E76A958BF90BE805D8FE3D3D94D4C3D096E439E9C42FE7AE667A173MBDA4925C96526E5_; idfa=B0B0973D-83BA-4138-94DB-9992E2628C52; x_xmly_ts=1649556797558; x_xmly_resource=xm_source%3Ahomepage%26xm_medium%3Ahomepage; x_xmly_tid=2044584262; device_model=iPhone%2012%20Pro; XD=u7wx8PB6jerbOB3k1JUr+ht0FSsus9WInXAF7goe37J4XWZ9PezexAcs4hvGRk2a72kw+9gmNaP3cb7fQCPBwg==; fp=008112644s2322e2v224v053121010g2202111001002020011011110021; freeFlowType=0; minorProtectionStatus=0`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Content-Type' : `application/json`,
'Accept-Encoding' : `gzip, deflate`,
'Host' : `hybrid.ximalaya.com`,
'User-Agent' : `ting_v9.0.28_c5(CFNetwork, iOS 15.4.1, iPhone13,3)`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'xmTraceId' : `9FA5D949-DC23-440D-A411-00A1DD2F50BE`
};
const body = `{"aid":87}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.body);
$notify("喜马拉雅","今日已打卡",response.body)
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

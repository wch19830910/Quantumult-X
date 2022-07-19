
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://m.xiaomiyoupin.com/mtop/act/redPacketSign/clickSign`;
const method = `POST`;
const headers = {
'Accept' : `*/*`,
'Origin' : `https://m.xiaomiyoupin.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Cookie' : `mjclient=YouPin; serviceToken=ao4BnEtTflUlNghAJcDIG/PQtdgQ4JEiCxt8pjNShL5lIifK29humvaAZB2KhWDrRKKM21+hP8TvnfSAQHwui0Z1+KZqZos6AIEm7oe1RseCXoy7F+D1vu1gL3GGZdSHgZgZzlfr/wMtzp89xjZkSw==; youpin_sessionid=1820f237126-05c0dbcbaded4f-85e5; youpindistinct_id=181db69bbc8-0e7eb51245905-624d`,
'Content-Type' : `application/json`,
'Host' : `m.xiaomiyoupin.com`,
'Connection' : `keep-alive`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MIOTWeex/2.0.5 (YouPin;5.4.1;D08E91050E7B8063;0.20.1;I;00000000-0000-0000-0000-000000000000;;D08E91050E7B8063;5C24E2D7-97FD-4023-9DD6-A357A60E29B8)  MIOTStore/20191212 (YouPin;5.4.1;D08E91050E7B8063;;I;00000000-0000-0000-0000-000000000000;;D08E91050E7B8063;5C24E2D7-97FD-4023-9DD6-A357A60E29B8) APP/com.xiaomi.youpin APPV/5.4.1 iosPassportSDK/4.0.3 iOS/15.4.1/XiaoMi/MiuiBrowser/4.3/Shop/ios/iPhone13,3/4.5.53`,
'Referer' : `https://m.xiaomiyoupin.com/hd/checkInsignIn/index.html?hideNavBar=true&channelId=5e830eaefbaabb0360336c92&spmref=YouPin_I.$Center$.sign_in.0.79107872`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
};
const body = `[{},{"actId":"5e830eaefbaabb0360336c92"}]`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

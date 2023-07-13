
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://qfapi.hmting.com/store/assign/sign`;
const method = `GET`;
const headers = {
'Accept-Encoding' : `gzip, deflate, br`,
'Cookie' : `_csrf=aabea8565a14995a74899e71246550352cac33b6fbbe792465fc9a7ee38166f7a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22DfrVVvvNChwCY4E89UNNThLGDmqO1Fwd%22%3B%7D; hmt_2132_auth=6d47GFX%2BqDKrTuH4U%2BOecvACToHK4jZxs%2BkaGLYOLoLfsw6ItoZo%2Fc8ioHxc5JSMjbrFJ8141RZotcI4oNJ6bEJvP14; hmt_2132_saltkey=zEl24w29; inner_version=6.5.0.0; qianfan_appcode=5.4.0; qianfan_appversion=6.5.0; qianfan_deviceid=8C18D2A3-236C-4BA4-85D7-911A8880F7AD; third_app_token=4c15VWcTHM94KGEJyO25W%252FCoJUQYrvkXUDFKqriGOQ4ovEtjzzfPgg066QK7GuAvtpwJhf4xwOs520MF0Kjht3SmtGJzgO5pfCYvaWi%252B04MgK3ZN76O05AQcyRiUngkTlxRndolwFsQ3sr4Fj7lNPgLtnz9%252BTZ5y7iGh4jdXxL9LRYMO%252BvUl4z9tAmuRVeJIn43j8tF%252FKC6jLs4nlwNn6qOFRi7X0Vvr19To%252B1Cm2tMrHP8TZCANcjuCaPIvqhCZ7p8X9uyO1vadLdjcugU80y7W0K1BH4KkyZ39BdV0wosiujJxkQ9%252FYrLj06PHCgLBzs18ivW5s7sxZOFYwolz7QpWhzJ%252BH9vN4o9NiqIIRk8lNWdBfbwDd%252B5bFTxQ5A4PZiY8OfaL3l1WoBvlzZ41HRcA53ULr1C2nPE7rIiX3iiBw6yfpIbqK57MnEcxSsZuSmcDU0FSaSNLdD3IHqAnOz6%252FC1amyyK0JdAjNqWkt%252BVhJ9WD9R8Y6ay9JSZ972diC%252BGGtc0x6Q%252BQcon3gemp2GLhegqmh%252BcJEEhFZ2kU5LkQrX0UaLAIrS99psG%252BOahuMHpFGxFhpLwu18iCPaKVus8gXY2IWbFH5nG2niD02gmzCbLrFQ; uuid=405f34d7a302f739266ba31377f1c57; wap_token=eb49I7CE0MWhSYaMv%252B7SlH%252FX%252BdDtOQMOXReYbfz4K62Hyn1T54wHmijCrMaEo0gZAfTkWZp%252Fnrm5y%252FSTbj0CN9%252FxepVIV%252FG1hq159Jbwo8k5WUf2YBZneXn4QpuHxesxFwBZ9GrdYSGOHXhDreoZy9ro33jG5bsu%252FrwxWcBWr5Zf9nY%252BQcqS3SGMOFxGIBnqAD8rH1WJ62VG3WD65t%252B0OxIUql%252F9WcwUr7GQeSD5UbopC6z2ybysBS5SKIQEiKBquV0jFl4k0dTOXJxvNNV7Y4C36YEqLhbRfpKUY4OCleWoYbDD6KS9MceGuzHkIbYelWrOkuNZtcQ%252BaUS1%252BFVIfKe%252FY2m7I4cZXPeII8I5IGBSlRuxOQ`,
'Connection' : `keep-alive`,
'Accept' : `application/json, text/plain, */*`,
'Referer' : `https://qfapi.hmting.com/store-view/assign/index?v=3.6.81`,
'Host' : `qfapi.hmting.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/20B82;QianFan;HEMINGTING;iOS;iPhone15,2;iOS 16.1`,
'Authorization' : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcWZhcGkuaG10aW5nLmNvbSIsImF1ZCI6Imh0dHBzOlwvXC9xZmFwaS5obXRpbmcuY29tIiwiaWF0IjoxNjg2NTI5OTIwLCJleHAiOjE3MTgwNjU5MjAsIm5iZiI6MTY4NjUyOTkyMCwidWlkIjoxOTEyNDksInVzZXJuYW1lIjoid2NoMTk4MzA5MTAiLCJhdmF0YXIiOiJodHRwczpcL1wvcGljLmFwcC5obXRpbmcuY29tXC91c2VyXC8yMDIyMDMyMjE1MTUxNmZyb250MV8wXzE5MTI0OV9GdGxUS19CVFVObXktTkJJY2pRUjBJOGVUTlJNLmpwZz9pbWFnZXNsaW18aW1hZ2VWaWV3MlwvMVwvd1wvMTAwXC9oXC8xMDAiLCJkZXZpY2UiOiI4QzE4RDJBMy0yMzZDLTRCQTQtODVENy05MTFBODg4MEY3QUQiLCJqdGkiOjE5MTI0OX0.jaLcB-dgcCSztYfO0aNiy9YdfCUyUXxCPE0LdRPjx34`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.body);
  if(response.body.indexOf("continue") != -1){
    $notify("鹤鸣亭", "", "今日签到成功🎉")
  }if(response.body.indexOf("重复") != -1){
    $notify("鹤鸣亭", "", "重复签到，今日已经签到过了😱")
  }else if(response.body.indexOf("请先登录") != -1){
    $notify("鹤鸣亭", "❌签到失败", "可能要更新一下cookie信息了")
  } 
    $done(); 
}
);

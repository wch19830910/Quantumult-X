
const u = "https://qfapi.hmting.com/store/assign/sign";

const h = {
"Accept-Encoding" : "gzip, deflate, br",
"Cookie" : "_csrf=e1a7e62f8fa2d832fd00d9cbe6cf44daac60a4cdf2120f3c4c8e2262432baf0fa%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22ugLjTvcKHthYZNweZffNJwrvUPA3e9n0%22%3B%7D; hmt_2132_auth=4a1aWPUu%2FZTmYneovPaT2Uf53RJcVzX3n%2BfHwUKgqBbU4L9Dx%2B4tQuPr0PmUYFecozTMCkha%2FvcHGiMgd8xPjNa9J%2Bo; hmt_2132_saltkey=K07owqOq; inner_version=5.4.3.0; qianfan_appcode=5.4.0; qianfan_appversion=5.1.4; qianfan_deviceid=8C18D2A3-236C-4BA4-85D7-911A8880F7AD; third_app_token=1820MmEZehXcnVuY%252BtC9nQ9TfrqId6lqFzy0BOffqB5VEerYAJ1nuzUQKlLEx6aHSaurRin%252BAzY87MDFc7ieg8xDgWbYFCy%252FydPFHz0o3RmUH5CqLuDNNTTZU0CRa82F2mgfNtXSryJDyJF53o33eCUf2IBjizlcP%252BDqR7Qgmf7j6%252FgMOzmiG9QVUSKnQO1dePf4jE9mixKWIDUY6UNA2lETG0sq23eeSEjzyyshBv5KFtTShkJW1p2rjq6gUs5sR8G%252BvENJBYKgYtCexGHkHx8QW2GiOQsX5L64DZ0NolwZ7fy7GI8sm8x7wAtwaaRU2c9N9x2FbnE5fikEKRpbyNwmM3RJ7OMTRq3VKAJ4EIK%252Ff4jd2gZAEmALKB0CL%252Bn7NT%252BsQmmwYbMq6iZq6XUKDH00HlgD%252B22E0nW2xx0J%252Fff3jrMHQPaNTbH9JnNSD8sTDG6Bm3q%252B5Jkyn%252F6s3JMnVNf62x%252FXaXavAxzQ7fz%252BJNwh%252Fw1BzwPTJrvzIhCPgFZD35BjBym%252F1ScHmFbzXNCO4Jf96qxqX%252FzPogQbdTu6du%252FcjP5xq6W9Ukp67w; uuid=405f34d7a302f739266ba31377f1c57; wap_token=d9594IykLa2XXcc0eI0DA4nD0IQQVxYz%252FAyOgk4kMrSfSR69i34tLkRb9vEmHjVxB2iixURwpCvk0SeLYZVB%252FEnpeDVVKJcV7z995rTXzxv3zEdVPyKGgmyfpgifP3ktx3%252BQJvEVF22tNCMNMBvhc%252BttBZlph80xKvcZNXoeB8PHK72aFxtzFSdd06DM6iWX8AiNrt%252F2cunnK60rOyqH7EoLRZ%252Bur1uhf6iyddUhe6b%252Fi5nOt%252Fi%252BLMDgSTl991jY4ye3kycaxIIKiFIMmXWZQljCCYv1H18qKcSNYOnrVVoIMiwH1WZqxzXKq7Ffy7acR0ByKpPOKyXUUpj%252Fh6YpEq4C2dimo3ZTDdhQmrU8XYCGSMm8hBN7wcMW",
"Connection" : "keep-alive",
"Accept" : "application/json, text/plain, */*",
"Referer" : "https://qfapi.hmting.com/store-view/assign/index?v=3.5.69",
"Host" : "qfapi.hmting.com",
"User-Agent" : "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/19E258;QianFan;HEMINGTING;iOS;iPhone13,3;iOS 15.4.1",
"Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcWZhcGkuaG10aW5nLmNvbSIsImF1ZCI6Imh0dHBzOlwvXC9xZmFwaS5obXRpbmcuY29tIiwiaWF0IjoxNjUxMzc4MTAyLCJleHAiOjE2ODI5MTQxMDIsIm5iZiI6MTY1MTM3ODEwMiwidWlkIjoxOTEyNDksInVzZXJuYW1lIjoid2NoMTk4MzA5MTAiLCJhdmF0YXIiOiJodHRwczpcL1wvcGljLmFwcC5obXRpbmcuY29tXC91c2VyXC8yMDIyMDMyMjE1MTUxNmZyb250MV8wXzE5MTI0OV9GdGxUS19CVFVObXktTkJJY2pRUjBJOGVUTlJNLmpwZz9pbWFnZXNsaW18aW1hZ2VWaWV3MlwvMVwvd1wvMTAwXC9oXC8xMDAiLCJkZXZpY2UiOiI4QzE4RDJBMy0yMzZDLTRCQTQtODVENy05MTFBODg4MEY3QUQiLCJqdGkiOjE5MTI0OX0.lOjCcInr6BX1wG03u_tITSH6B3gckQSYwoyOhIzrbgM",
"Accept-Language" : "zh-CN,zh-Hans;q=0.9"
};

const m = "GET";

var myRequest = {url: u, method: m, headers: h};

$task.fetch(myRequest).then(response => {  
  console.log(response.statusCode + "\n\n" + response.body);
  if(response.body.indexOf("days") != -1){
    $notify("鹤鸣亭签到", "", "成功👍")
  }
  if(response.body.indexOf("重复") != -1){
    $notify("今日鹤鸣亭签到", "失败👇", "今日已经签过到")
  } 
  if(response.body.indexOf("登录") != -1){
    $notify("鹤鸣亭", "登录信息失效😭", "请重新获取登录信息😁")
  } 
    $done(); 
}
)

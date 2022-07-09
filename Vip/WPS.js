脚本功能：WPS解锁超级会员
软件版本：11.26.0
下载地址：http://t.cn/A6ZD2hl3
脚本作者：Hausd0rff
更新时间：2022-07-05
脚本发布：https://raw.githubusercontent.com/wch19830910/Quantumult-X/main/Vip/WPS.js
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > WPS解锁稻壳会员
^https?:\/\/account\.wps\.cn\/api\/users url script-response-body https://raw.githubusercontent.com/wch19830910/Quantumult-X/main/Vip/WPS.js
[mitm] 
hostname = *.docer.wps.cn, vipapi.wps.cn, account.wps.cn

*******************************/

var body = JSON.parse($response.body);
var obj = {
  exp: 0,
  level: 3,
  privilege: [
    { spid: "data_recover", times: 0, expire_time: 4094325168 },
    { spid: "ocr", times: 0, expire_time: 4094325168 },
    { spid: "pdf2doc", times: 0, expire_time: 4094325168 },
    { spid: "pdf_merge", times: 0, expire_time: 4094325168 },
    { spid: "pdf_sign", times: 0, expire_time: 4094325168 },
    { spid: "pdf_split", times: 0, expire_time: 4094325168 }
  ],
  result: "ok",
  total_buy: 0,
  total_cost: -30,
  userid: body.userid,
  vip: {
    name: "超级会员",
    has_ad: 0,
    memberid: 40,
    expire_time: 4094325168,
    enabled: [
      { memberid: 40, name: "超级会员", expire_time: 4094325168 },
      { memberid: 20, name: "WPS会员", expire_time: 4094325168 },
      { memberid: 12, name: "稻壳会员", expire_time: 4094325168 }
    ]
  },
  wealth: 0,
  expire_time: 4094325168
};

$done({ body: JSON.stringify(obj) });

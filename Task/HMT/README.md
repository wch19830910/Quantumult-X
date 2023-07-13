鹤鸣亭APP自动签到


cookie获取:打开app，我的，点击等级获取成功即可注释点cookie获取脚本
[rewrite_local]
#鹤鸣亭Cookie
^https:\/\/qfapi\.hmting\.com\/store\/grade\/grade-list url script-request-header https://raw.githubusercontent.com/wch19830910/Quantumult-X/main/Task/HMT/HMTCK.js

[task_local]
11 0 * * * https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js, tag=爱奇艺, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/iQIYI.png, enabled=true

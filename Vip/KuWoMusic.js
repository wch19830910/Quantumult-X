/******************************

脚本功能：酷我音乐+解锁VIP【广告➕VIP➕数字➕下载】
更新日期：2022-09-27
软件版本：10.3.3
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************
[rewrite_local]

^https?:\/\/.*\.(kuwo|lrts)\.(cn|me)\/(a\.p|music\.pay|(vip\/(v2|enc)\/(theme|user\/vip))|(EcomResource|(Mobile)?Ad)Serv(er|ice)).* url script-response-body https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/KWYY/kwyy.js
^https:\/\/vip1\.kuwo\.cn\/vip\/v2\/userbase\/vip\?op\=getMCInfo url script-response-body https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/KWYY/kwyy_userbase.js

[mitm] 

hostname = *.kuwo.cn, *.lrts.me

********************************/

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('r Z=\'1S.1T.1m\',1U=[\'‮Z\'],T=[Z,\'3h\',\'3i==\',\'3j=\',\'3k==\',\'3l\',\'3m=\',\'3n=\',\'3o==\',\'3p==\',\'3q\',\'3r==\',\'3s\',\'3t=\',\'3u\',\'3v=\',\'3w=\',\'3x\',\'3y/3z=\',\'3A=\',\'3B/3C==\',\'3D=\',\'3E/3F+3G+3H+3I/3J/3K/3L/3M/3N/3O+3P/3Q+3R/3S/3T/3U/3V/3W+3X/3Y/3Z/4g+4h/4i/4j/4k==\',\'4l/4m==\',\'4n==\',\'4o/4p=\',\'4q==\',\'4r==\',\'4s+\',\'4t=\',\'4u==\',\'4v\',\'4w==\',\'4x==\',\'4y/4z\',\'4A\',\'4B+4C==\',\'4D==\',\'4E==\',\'4F=\',\'4G=\',\'4H=\',\'4I==\',\'4J\',\'4K==\',\'4L=\',\'4M\',\'4N\',\'4O/4P\',\'4Q==\',\'4R\',\'4S\',\'4T==\',\'4U\',\'4V\',\'4W\',\'4X+4Y=\',\'4Z==\',\'5g/\',\'5h=\',\'5i==\',\'5j==\',\'5k/5l/5m=\',\'5n=\',\'5o=\',\'5p=\',\'5q+5r\',\'5s/5t==\',\'5u/5v==\',\'5w\',\'5x=\',\'5y==\',\'5z==\',\'5A\',\'5B==\',\'5C=\',\'5D=\',\'5E=\',\'5F/5G==\',\'5H==\',\'5I\',\'5J=\',\'5K==\',\'5L\',\'5M==\',\'5N\',\'5O==\',\'5P==\',\'5Q=\',\'5R=\',\'5S\',\'5T\',\'5U\',\'5V\',\'5W==\',\'5X=\',\'5Y=\',\'5Z==\',\'61.62.1m==\'];z(J(h,i,j){J 1V(a,b,c,d,e,f){b=b>>63,e=\'64\';r g=\'65\',1n=\'66\',f=\'‮\';z(b<a){1o(--a){d=h[g]();z(b===a&&f===\'‮\'&&f[\'U\']===y){b=d,c=h[e+\'p\']()}K z(b&&c[\'1g\'](/[67=]/g,\'\')===b){h[1n](d)}}h[1n](h[g]())}V 68};V 1V(++i,j)>>i^j}(T,1W,69),T){1U=T[\'U\']^1W};J l(g,h){g=~~\'6a\'[\'6b\'](g[\'1X\'](y));r i=T[g];z(l[\'1Y\']===1h){(J(){r d=1i 1Z!==\'1h\'?1Z:1i 6c===\'2g\'&&1i 6d===\'J\'&&1i 2h===\'2g\'?2h:6e;r e=\'6f+/=\';d[\'1p\']||(d[\'1p\']=J(a){r b=1q(a)[\'1g\'](/=+$/,\'\');P(r c=t,1j,L,2i=t,1r=\'\';L=b[\'6g\'](2i++);~L&&(1j=c%2j?1j*6h+L:L,c++%2j)?1r+=1q[\'2k\'](6i&1j>>(-2l*c&6j)):t){L=e[\'F\'](L)}V 1r})}());J 2m(a,b){r c=[],D=t,W,1s=\'\',1t=\'\';a=1p(a);P(r d=t,2n=a[\'U\'];d<2n;d++){1t+=\'%\'+(\'6k\'+a[\'1u\'](d)[\'6l\'](6m))[\'1X\'](-2l)}a=6n(1t);P(r e=t;e<Q;e++){c[e]=e}P(e=t;e<Q;e++){D=(D+c[e]+b[\'1u\'](e%b[\'U\']))%Q;W=c[e];c[e]=c[D];c[D]=W}e=t;D=t;P(r f=t;f<a[\'U\'];f++){e=(e+y)%Q;D=(D+c[e])%Q;W=c[e];c[e]=c[D];c[D]=W;1s+=1q[\'2k\'](a[\'1u\'](f)^c[(c[e]+c[D])%Q])}V 1s}l[\'2o\']=2m;l[\'1v\']={};l[\'1Y\']=!![]}r j=l[\'1v\'][g];z(j===1h){z(l[\'2p\']===1h){l[\'2p\']=!![]}i=l[\'2o\'](i,h);l[\'1v\'][g]=i}K{i=j}V i};r A=$2q[l(\'‫0\',\'1w\')];r s=$B[l(\'‮1\',\'1x@v\')];r M=$2q[\'M\'];N 1y=\'1y\';N 1k=\'/a.p\';N 1z=l(\'‮2\',\'1l\');N 1A=l(\'‮3\',\'2r\');N 2s=l(\'‫4\',\'1B\');N 2t=l(\'‮5\',\'Y@o^\');N 2u=l(\'‮6\',\'k$G@\');z(A[l(\'‫7\',\'^#x&\')](1y)!=-y&&M==l(\'‫8\',\'2w\')){r 1C={};1C[l(\'‫9\',\'2x\')]=\'{}\';$E(1C)}z(A[l(\'‮a\',\'X@\')](1k)!=-y&&M==l(\'‮b\',\'1D\')){r s=$B[\'s\'][\'1g\'](/"6o":\\d+/g,\'\\6p\\2y:1\')[\'1g\'](/"6q":\\d+/g,l(\'‮c\',\'1E\'))[l(\'‫d\',\'2r\')](/"6r":\\d+/g,l(\'‮e\',\'^#x&\'))[l(\'‮f\',\'^6s\')](/"6t":\\d+/g,\'\\6u\\2y:5\');r B={};B[l(\'‫10\',\'1F\')]=s;$E(B)}K z(A[\'F\'](1k)!=-y&&A[l(\'‮11\',\'1G\')](\'6v\')!=-y){r 2z=\'3|4|10|2|1|0|9|7|11|5|8|6\'[l(\'‫12\',\'(2A\')](\'|\'),2B=t;1o(!![]){2C(2z[2B++]){m\'0\':O[l(\'‮13\',\'6w)\')]=6x;q;m\'1\':O[l(\'‮14\',\'1E\')]=y;q;m\'2\':O[l(\'‮15\',\'Y@o^\')]=y;q;m\'3\':r s=I[l(\'‫16\',\'2D\')](s);q;m\'4\':r O={};q;m\'5\':r 1H={};q;m\'6\':$E(1H);q;m\'7\':s[l(\'‫17\',\'2E\')]=O;q;m\'8\':1H[l(\'‫18\',\'6y\')]=s;q;m\'9\':O[l(\'‮19\',\'1E\')]=1I;q;m\'10\':O[l(\'‮1a\',\'2F\')]=1I;q;m\'11\':s=I[\'6z\'](s);q}2G}}K z(A[l(\'‫1b\',\']@#j\')](1k)!=-y&&A[\'F\'](\'6A\')!=-y){$E({})}z(A[\'F\'](2s)!=-y&&M==l(\'‮1c\',\'1J!n\')){r 1K={};1K[\'s\']=2u;$E(1K)}z(A[\'F\'](1A)!=-y&&A[l(\'‮1d\',\'6B\')](l(\'‮1e\',\'(2A\'))!=-y){r s=I[\'6C\'](s);r u={};u[l(\'‫1f\',\'!c$S\')]=\'2H://2I.1L.1M/2J/6D-6E-6F-6G-6H.2K\';u[l(\'‫20\',\'1J!n\')]=\'6I://6J.1L.1M/6K/6L/6M/6N/6O.6P?6Q=6R&6S=1&6T=1\';u[\'6U\']=l(\'‮21\',\'X@\');u[\'6V\']=l(\'‮22\',\'2w\');u[l(\'‮23\',\']6W(\')]=\'0\';u[l(\'‮24\',\'1F\')]=\'6X\';u[l(\'‫25\',\'1G\')]=\'1\';u[\'6Y\']=\'1\';u[l(\'‮26\',\'1N\')]=\'2H://2I.1L.1M/2J/6Z-70-71-72-73.2K\';u[l(\'‮27\',\'X@\')]=l(\'‫28\',\'2v@H\');u[\'74\']=l(\'‫29\',\'n]R\');u[l(\'‮2a\',\'2E\')]=\'0\';u[l(\'‮2b\',\'1D\')]=l(\'‫2c\',\'1w\');u[\'75\']=\'3\';u[l(\'‫2d\',\'3)C]\')]=\'2\';u[\'76\']=\'0\';u[l(\'‮2e\',\'77\')]=\'0\';u[l(\'‫2f\',\'1O\')]=\'2\';u[l(\'‫30\',\'1P\')]=\'1\';u[\'78\']=l(\'‮31\',\'^#x&\');u[l(\'‫32\',\'!c$S\')]=\'2\';u[\'79\']=\'2\';u[l(\'‫33\',\'1D\')]=l(\'‮34\',\'2L\');u[\'7a\']=\'7b\';s[\'u\']=u;s=I[l(\'‮35\',\'1l\')](s);r B={};B[\'s\']=s;$E(B)}K z(A[l(\'‫36\',\'1x@v\')](1A)!=-y&&A[l(\'‮37\',\'2L\')](l(\'‫38\',\'n]R\'))!=-y){$E({})}z(A[l(\'‫39\',\'1B\')](1z)!=-y&&M==\'7c\'){z(s[\'F\'](\'7d\')!=-y){r 2M=\'5|27|16|22|23|7|8|28|1|36|14|12|4|29|11|2|33|9|32|6|34|0|19|35|3|13|21|15|24|17|20|25|18|26|31|10|30\'[\'7e\'](\'|\'),2N=t;1o(!![]){2C(2M[2N++]){m\'0\':w[\'7f\']=t;q;m\'1\':r 2O=s[\'2P\'][t];q;m\'2\':w[\'7g\']=7h;q;m\'3\':w[l(\'‮3a\',\'n]R\')]=2Q;q;m\'4\':w[l(\'‫3b\',\'7i]h\')]=1Q;q;m\'5\':r s=I[l(\'‫16\',\'2D\')](s);q;m\'6\':w[l(\'‮3c\',\'X@\')]=1I;q;m\'7\':r 1Q=1R+\'7j\';q;m\'8\':r 2R=s[l(\'‮3d\',\'n]R\')][t][l(\'‫3e\',\'2x\')][l(\'‫3f\',\'7k\')];q;m\'9\':w[l(\'‮40\',\'2S\')]=2T;q;m\'10\':B[l(\'‮41\',\'2F\')]=I[l(\'‫42\',\'!2U\')](s);q;m\'11\':w[\'2V\']=2W;q;m\'12\':w[l(\'‮43\',\'1x@v\')]=1R;q;m\'13\':w[\'7l\']=t;q;m\'14\':w[l(\'‫44\',\'Y@o^\')]=2X;q;m\'15\':w[l(\'‮45\',\'2Y!\')]=t;q;m\'16\':r 2X=s[l(\'‫46\',\'1w\')][t][l(\'‮47\',\'1O\')][t][l(\'‮48\',\'k$G@\')];q;m\'17\':w[l(\'‫49\',\'1l\')]=2Z;q;m\'18\':w[l(\'‮4a\',\'7m\')]=2O;q;m\'19\':w[\'7n\']=2Q;q;m\'20\':w[l(\'‫4b\',\'n]R\')]=7o;q;m\'21\':w[l(\'‮4c\',\']@#j\')]=3g;q;m\'22\':r 2Z=s[\'2P\'][t][l(\'‮4d\',\'7p\')][t][l(\'‮4e\',\'1J!n\')];q;m\'23\':r 1R=s[l(\'‮4f\',\'7q\')][t][l(\'‫50\',\'1F\')][t][l(\'‫51\',\'1B\')];q;m\'24\':w[l(\'‫52\',\'X@\')]=3g;q;m\'25\':w[\'7r\']=t;q;m\'26\':s[\'w\']=[w];q;m\'27\':r 2W=s[l(\'‮53\',\'7s\')][t][\'2V\'];q;m\'28\':P(r i=t;i<2R;i++){s[l(\'‮54\',\']@#j\')][t][l(\'‮55\',\'2S\')][i][\'7t\']=t}q;m\'29\':w[l(\'‮56\',\'1G\')]=1Q;q;m\'30\':$E(B);q;m\'31\':r B={};q;m\'32\':w[\'7u\']=2T;q;m\'33\':w[\'7v\']=[];q;m\'34\':w[l(\'‮57\',\'1N\')]=t;q;m\'35\':w[l(\'‮58\',\'1O\')]=t;q;m\'36\':r w={};q}2G}}K{$E({})}}K z(A[\'F\'](1z)!=-y&&M==l(\'‮59\',\'n]R\')){$E({})}z(A[\'F\'](2t)!=-y&&A[l(\'‮5a\',\'1P\')](l(\'‫5b\',\'!2U\'))!=-y){r s=I[l(\'‮5c\',\'2Y!\')](s);s[l(\'‫5d\',\'1l\')][l(\'‮5e\',\'1P\')]=7w;r B={};B[l(\'‫5f\',\'^#x&\')]=I[l(\'‮60\',\'1N\')](s);$E(B)};Z=\'1S.1T.1m\';',62,467,'|||||||||||||||||||||_0x489d|case||||continue|var|body|0x0|data||user||0x1|if|url|response||_0xfb9211|done|indexOf|||JSON|function|else|_0x4fac25|method|const|packs|for|0x100|Mr||_0x589c|length|return|_0x47e7a7|geo||_0xod3|||||||||||||||||replace|undefined|typeof|_0x22091a|a_p|hg6G|v6|_0x487f7f|while|atob|String|_0x1acbe7|_0x5da942|_0x45219f|charCodeAt|wvXrnV|di6B|Kt|Serv|music_pay|v2_vip|jNC6|modify|9zLS|w0Pg|76Jo|ACDW|new_name|0xf4849500|9J|new_no|kuwo|cn|oY6n|JzNF|Uzlu|audio_policy_1|audio_policy|jsjiami|com|_0xod3_|_0x4af477|0x193|slice|QoJWJz|window|||||||||||||||||object|global|_0x5aa4b8|0x4|fromCharCode|0x2|_0x29ac38|_0x3c932a|LcFRqU|lwLzKU|request|G7SF|enc_vip|theme|modified||JUfJ|pZlj|x22|oaGfBF|Dp7|AQyUGb|switch|dQ1M|45ww|2WsE|break|https|image|fe|png|hTd8|tbpkLp|kjmbpu|info|songs|0x12c|audio_length|pazf|0x62ca4da9|WmN|id|sons_id|audio_pid|4U2|audio_price|||||||||||||||||0xbb8|QsKCw6UrZcOUU8OpwplVw7EMwpZD|TsK2w5pJEA|w5fCtFEWw78|IkdZw7rDvw|EGMRwrtcwpvDoMKh|ADREwrHDhUs|wrLCtsOIw73CosKew48|wpNgSQ|NsOIw5TDsxRVOg|ZMOLw5PDocKX|UsO8f8OfXQ|w6loR8O4|McODw5XDsi5zOcKyw4o|BW7DrsKC|MDVEwp3DhUjCmcOew58|Y8OswrA|ZcK6wq5T|wqJkRsOqw5|ChMOBw71rwq0|GEjCvMK2wpgBw5nCm8O4wo3CusKAwrJiDwY|YA|CosKBw7vChsKROiTCgMOGZsOTwrTDucOaZw|J8OKTcOFwrtlE8Oewp3DicObbkM|fMOvwr4vSmAIw7TDkTIQWV3Ckw|DksO|bMK3wqkIw7ppI1DCo8OqwpTCicK5w4vCisOrw6I3w5DChsKVwrrChmjDuMOBQ8KDSXrDrw0kwrTCkCxmGsKdORE9RsKkwrvDnlojwozDrhI|woLDocO8w5p|SXvDryrDswVWwrrCu3Y9wrwDwr9VGsOkwrHDq8KWworChMKKFMOpJTXCvcKGdMO9w5BoTUgbeMO3wrTCqXF|OMO0worCrcKgw6fDkCPDr8KZUcKRwolMaitgIChgNMOmMMOUw67CqnfCkFHCtS4mwoUEQkzDtSQmIh7DkMKHw5zDpgLDmQV|w4bDvh|Co39iwrInekl7R8KcwrPCnMKkwojDnm3DrXsvwp3DssOHwpnDrnTDusKVw5fDu2UhRylAwqPDlsOGccOIw4Jjw4PCjcOEwpLDkCIZXiJ2wq9aw7TDphA3wopXwq|CrQjCgykMaxHChhR3w7fDqBLCkDt4JWfDoMOqwqcnwrTCjcOcwpUrw63DokTCmmPDtUnDn8O9wqrDoMOVbMO3w6QbAn3CisKUwpoNLwANIwHDvnnCo8K2w4Mow6ZVa8O1dcKSwoXDr3Fqw6g9w4ULw6Rjw4PDp8K|wqvDh8OEwoI2w40mw556wq4ZBsKxw5kWL8KVw6TDiSgBLUrDoT4HacOXQcKpH8OZwpEAwqABwrrCsW9Awr9uL8O1and4Qj|DoRzDlMOSWMOVw7cUw5vDosKhwpvCscOJHwg|DcOJwpvCkcOFw7HDnjHCicKGcT7ClMKnwr3CrcKbBsKCwottN8OmUhzChzHDvsKzSMKqw4jDihJOJjdiw4tjWcOBYcK1wpbDksK3OcKbwrnCmMOHwpzCrCwIFcKuJU9XKMKtD3HCjwjDhBMkw7pzw6NAOMO0ccKIPT01MsKxwoTCv8OIenIJwocLwrHDugodZsKxw5DDk8Klw5UuwpTCljIdw4jDssKxAMK4B8Klw584w47ClHnCih5kFMKww4|DsHtkRMODDMO1wp9ndmd0A3RmUVfDoXDCthJsaynDrMORQMKMw7PCphnCmsKlZn8|wrbDvTLDtGjDnxIyMHrDnUPDgSPCvsKww4LCoCwxw6fDlAfCpMKuYcKjARVCKcKfwqDClUZtwqHCh2R0QSsFFHXCkBrDncKiCMKHLsKyWDvDlTQxQEbDuMK8UMKSLcO9N8K3w5NVwoHDnMOpFGzCoW3DjMKiw5khwrTDhVbCmyBZwrDDtW0BBcKxw7NaSmrCj8OYUiNifA3Dr8OPGMKlwrEdE8OhwosLw7HCs8Kxw4zDhcKew6HDpEB7w4TDi8Ojw6NoWiJRwo3DgStlK8K3MQNuTGNVwoXCtXpJwpHCnMKhfxQ|BMOHw6jClRtQwq7DlMKUdB|DjsOZQcKuwo3DqcO6JcKsPRoywqXCpT3ClsOuw7PCtE3Cuhxywo|ChcKbSCkyworDjAgIwrXDuC3CgsKGasO|JhMow5vCqMKJHsKjwp|DnBZPM3AWVcObw6Zuw5rClMO0KBDDtWbDpcO|wp4XIHHCgkTDtREuRcKCw7nCnsO6GsOQwpYswrchwo0hw6PCgMOtCHbChcKMw5FbYFk0Mn3CkWLCjsKRWcKlw5rCnnrCg8Obw7vCsFFGU34Xw7RCwrvDisOSB8ONw7JhY19Ww7xxIRTCg8KxGlTCpsKVcsO8wr|Cp0cqUMOTwr7DucKKSyHCgRB6fyDCgFgKw7VAwr3DmG8Hw7oIFRHCsjlQSkcCwprDk8OIDmlLHsObwq8lw5bCmcOHAMOCwrsQwpPCqMKKw5ljw4LDqH|CmcKwcsKaf8OfaSDCq8OpekINw47ClsK5wrTDtD9Lw5sOJcKgw5o2OnACwpjCv8KuEcO0w5DCu8Kqw7suIUrDmXfCu8OLKsKPfmoCcsOTwqLDs8KPDsK4a2tbwrgtT2rDgkwhGsOQEMOnw6fCrMKZP3kaw6RQw516wrLCvcKLblrDo8KIGQkuH8OPw6MAwql8Z2g7w63Ct8OTTMOnQBEwwrTCvC0jH8KTw5bDgcOXC0UbasK0wrfDiMK7wrvCvgLCjcOSMcKJBMOzw6jDo1PCvlLDqgtUwr3DmsOSHcKxAC7CgsOac8KUecOSPD0HwoYLcgXDo8Kuw58Dw7HCj8OvDMOuT8OlOcOcw6fCqMOdQMONJMK|||||||||||||||||w6jCsBl2a8KqwofCvQ3Cq091YMK8wroQwoMkwqhSw7wGHnnDsMODZ8KvYMKEw6vDucO5woEbeMOmwo8cwr3CqBAOw6bCgATDtl3DmsKmw4fDqcOawoE2E8OfEMKqCMKUw6Naw73DscOtwoR|wqzCosORVm8cwrc9ccKpKcKYwpLDiS50HXQpWsKvw6Y5w4JVPh57M0PDgXwqw6R4TMKoJyXDm8O8wrFQbsOqFAPCtnjCvwLCgMK9BMK2w4vCilbDnFsPwpJjwrfCtwFgTMKIQcOxwo8fw4pAEMOgw4HDjzTCvMKqIsOXw6PDrMKSUCfCvEVaw5zDrgLDnw7DksKmdMOTw53Dp0vDtwU6IMOcLFPCv8K6OT97wpR0w77Dl8OHwovDhx5dw4PDvcKIw4fDo0LDpsO1VMOSw57CpMKDZC7Dv8O0TsKtbcKXw7VPw7jCvkHCvcOpw7nDsMOpBsKUJcOKIATCr8KPwo7Dq01uw6E|UxYMwrNheApNZsOqw48MRW|CijvDqybDtsKZwpLCmhDDrSY7wpHClsOuwotuw4o|woxfZcOxJsOcw5dfD8OYworDlBEJwpvDuX9FehXCvcKPZMKMwqXDlxstw7dDwojCpmnDgFFpMEkEGinCl2FEwqcRwpBjw40DCMOfwozDo8KTTMOsFXJGCiXDosO3WQ7Dlw|Dm|DrsKew6Atdg|w4weCQ|HQ|Crj8|T8KDw7YgS8OyUQ|HMOZwpLDgw|w7XCjcKhGArDlsOTd8O4w4DDtWV|RVvCpcKqw5YUwo4|RXHDpcKXw7EBaXFdRMK9XwfCsw|PGrDjcK1Wzoc|w5LCk8OkEw|GmwBwrtDwqbDpw|w4ZZwp|DscKL|I8Kbw7NYScKq|wqPCkMK|Cg|asOTUcOSw7xnfsKHwoDDkQ|HcK6wqcrJg|wrbDgS7Dm3I|HCzDhS8|wrXChsK7CAzDkMOlZsO5w4TCiDohwqk|EHzCsQ|w43CtVsUw7TCt8OB|DjrCig|w6nDnsOfwqLDvcOnw5M|w5pZw47DrcKW|wq3DrXPDlcKcdMOs|IBzCscOQBMK|wqzCiT3DpMOi|FMOcwqR1Aw|w50SDcOR|wqzDmUPDolvCth5jeMKjaMOnw7fDr8KvwrFP|w4TClcOtDw|FG02wqhSwpnDkcK5J8Oz|NShGwpnDokzCn8OW|VcKbw7s1esOeWMOi|bcKSw4w6MMOoWMKuw6nDqHbCt8K1wohQFj5JcHbDn8KJwqUPwodFaMK6woVvAQlAwr7DvMKzwrNxMMOKw7IEwoBrXVwcw7tGIjvChsKlwqnDsMO|wpLCgcKlVCcnZn5FwoM|w6AULcKmw4MMBTvDiRPDkFrCnA|||||||||||||||||wqTDiSjDlFLCqDc|IMOjwrnDoldLYQrDrlc|fsOqwqgdaHHCgU0Lw6g7w7sOw5jCnC9YDcOOCgdvET81woB3csOTAyjCiR02dynDiycvX8KAbnbDgcOtwrIHHErCrMKoVlMkw5DCpsOtHMOJwrVCSFEVw5DCoAzDuw|W8KqBADCrxYCw4VvWA|fBfCm8Ksw5Y|N8O|EMOrw6vCshBeF2k|wrrCrMOHw5LClMKEw5QXUjhSQMOnw5U|PcOPw5XDsi12PsKjw5Q|UzDCusOJwqtQKTMUBMOoTQ0|wq3DrXPDscK|bsO2wqnDmsKvCsORZhgU|OsO|wrHDkl1CQRvDpA|PlLDpMO|wrocdXDCosOsAcKhKw|w759QcOww5jCgMKGw6tz|bsK7wq5PwrFDwos|Yw3CsMKow7FhKg|wr5WcsO6woBdXWHClUHCgQnDhw|JhfCr8KUwqzCrMKZ|wrBKasO6wqVOTGjCiw|w6dGNC8|Q8KDw7Y|wqdKc8OzwoM|HhXCri|CrA|woXCgWHCnsOSRA|IUdE|F33CsRs|eMOPwpzDr8Kdwo8nwqnDjA|c8KswrpP|eMOVQA|RsOyesOCbhnCrMKcUMKeFMOO|ZcOxwrIKaA|wrfCrMObw7rCjg|WsOpw64|w717WsO6w5M|YcKIVMKa|wqRAb8O9wp9a|w5TCt14Iw5rCkcODwqxocRkawp5b|XMKHZ3di|OQ3Ct8OdKw|D8O5w6dew7I|w5HCicOkAwg|PxbCp8KYwrfCmg||CYjSYsfjkiIxamri|CBzApxcom|0x8|po|shift|push|CYSYfkIxrCBzApx|0x105977|0x19300|0x|concat|process|require|this|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|charAt|0x40|0xff|0x6|00|toString|0x10|decodeURIComponent|playright|x22playright|downright|policytype|qvp|policy|x22policy|getvip|ewi|0x1f|UtdN|stringify|advertright|lZqj|parse|f2d09ac0|b959|404f|86fa|dc65c715c0e96|http|vip1|vip|vue|anPay|pay|index|html|pageType|avip|MBOX_WEBCLOSE|FULLHASARROW|growthValue|vipTag|bE|1577808000000|isNewUser|34ad47f8|da7f|43e4|abdc|e6c995666368yyb|vipmExpire|userType|vip3Expire|Xv6i|vipLuxuryExpire|svipAutoPayUser|svipExpire|4102329600000|POST|audio|split|playCnt|order|0x1666118f|D9|_1|Iv22|playVideoCnt|2I64|playUpper|0x3e8|knKS|KVYV|feetype|y0g8|st|begin|final|null'.split('|'),0,{}))
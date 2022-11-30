/*
微信公众号：ios黑科技
官方网站：ioshkj.com

圈X:

*/


var modifiedHeaders = $request.headers;

modifiedHeaders['device-uniq'] = 'e000f15c1f34a73b54d1a23dfb6c138a';

$done({headers : modifiedHeaders});
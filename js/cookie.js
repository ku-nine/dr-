function setCookie(key, value, day, path = "/") {
    // cookie 是以键值(key,value)对形式存在的字符串   expires    path
    if (day) {
        var date = new Date();
        date.setDate(date.getDate() + day);  //过期时间
        // document.cookie = `${key}=${value};expires=${date.toUTCString()};path=${path}`;
        document.cookie = key + "=" + encodeURIComponent(value) + ";expires=" + date.toUTCString() + ";path=" + path;
    } else {  //如果不传day  那么浏览器关闭时过期
        document.cookie = key + "=" + encodeURIComponent(value) + ";path=" + path;
    }
}


// cookie的取值   根据key(属性名)  取值(属性值)
// cookie的获取
function getCookie(key) { // 查询的键(属性名)  
    var cookie = document.cookie;

    if (cookie) {  // "log_user=www; log_pwd=123123"
        var dataList = cookie.split("; ");
        // console.log(dataList);

        // 主页面只要求找用户名
        for (var i = 0; i < dataList.length; i++) {
            var item = dataList[i]; //"log_user=www", "log_pwd=123123"

            var name = item.split("=")[0];  // "log_user"   当前数据的键
            var val = item.split("=")[1];  // "www"    当前数据的值
            // console.log(item.split("="));

            if (name == key) {
                return decodeURIComponent(val);
            }

        }
    }

    return ""; // 如果查不到  返回""
}

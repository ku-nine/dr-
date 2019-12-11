var $ = {
    /*
       @params  obj
       obj的相关属性
           type      string    请求方式  (get/post);
           url       string    接口地址
           data      string/object    参数数据 "key=" + key + "&orderCol=" + orderCol + "&orderType=" + orderType
           async     boolean   同步/异步(true 默认)
           dataType  string    文本（"text"）  json对象（"json"）
           success   function  成功时的回调函数
    
    */

    ajax: function ({ type = "get", url, data, async = true, dataType = "text", success } = { type: "get", data: "", async: true, dataType: "text" }) {

        var req = new XMLHttpRequest();

        if (typeof data == "string") {   //如果时字符串  直接赋值给str
            str = data
        } else if (typeof data == "object") {  //如果是对象  遍历对象  拼接为字符串  赋值给str
            var str = "";
            for (var key in data) {
                console.log(key, data[key]);
                str += key + "=" + data[key] + "&"
            }
            // key=&orderCol=id&orderType=asc&pageIndex=1&showNum=4&
            str = str.substr(0, str.length - 1); // 把字符串最后的& 去掉
        }

        if (type == "get") {
            req.open("get", url + "?" + str, async);
            req.send();
        } else {
            req.open("post", url, async);
            req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            req.send(str);
        }

        req.onreadystatechange = function () {
            // 2 3 4 
            if (req.readyState == 4 && req.status == 200) {
                // console.log(req.responseText);
                var result = req.responseText;
                if (dataType == "json") {
                    result = JSON.parse(req.responseText);
                }
                // console.log(result);

                if (success && typeof success == "function") {
                    success(result); // 函数的调用
                }

            }
        }
    },
    get: function ({ url, data, async = true, dataType = "text", success } = { data: "", async: true, dataType: "text" }) {

        var req = new XMLHttpRequest();

        if (typeof data == "string") {   //如果时字符串  直接赋值给str
            str = data
        } else if (typeof data == "object") {  //如果是对象  遍历对象  拼接为字符串  赋值给str
            var str = "";
            for (var key in data) {
                console.log(key, data[key]);
                str += key + "=" + data[key] + "&"
            }
            // key=&orderCol=id&orderType=asc&pageIndex=1&showNum=4&
            str = str.substr(0, str.length - 1); // 把字符串最后的& 去掉
        }


        req.open("get", url + "?" + str, async);
        req.send();

        req.onreadystatechange = function () {
            // 2 3 4 
            if (req.readyState == 4 && req.status == 200) {
                // console.log(req.responseText);
                var result = req.responseText;
                if (dataType == "json") {
                    result = JSON.parse(req.responseText);
                }

                // console.log(result);

                if (success && typeof success == "function") {
                    success(result); // 函数的调用
                }








            }
        }
    },
    post: function ({ url, data, async = true, dataType = "text", success } = { data: "", async: true, dataType: "text" }) {

        var req = new XMLHttpRequest();

        if (typeof data == "string") {   //如果时字符串  直接赋值给str
            str = data
        } else if (typeof data == "object") {  //如果是对象  遍历对象  拼接为字符串  赋值给str
            var str = "";
            for (var key in data) {
                console.log(key, data[key]);
                str += key + "=" + data[key] + "&"
            }
            // key=&orderCol=id&orderType=asc&pageIndex=1&showNum=4&
            str = str.substr(0, str.length - 1); // 把字符串最后的& 去掉
        }


        req.open("post", url, async);
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.send(str);

        req.onreadystatechange = function () {
            // 2 3 4 
            if (req.readyState == 4 && req.status == 200) {
                // console.log(req.responseText);
                var result = req.responseText;
                if (dataType == "json") {
                    result = JSON.parse(req.responseText);
                }

                // console.log(result);

                if (success && typeof success == "function") {
                    success(result); // 函数的调用
                }

            }
        }
    }
}
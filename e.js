setTimeout(function() {
    var timestamp = new Date().getTime();
    var url = 'https://i.qianbao.qq.com/lib/components/adapt/middlepage.html?url=https://qm.qq.com/q/WJJxIi8VyY' + '#' + timestamp + 'yuge';
    location.href = url;
}, 10);
    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;
    if (isWeixin) {
        var now = new Date();
        var timestamp = now.getTime();
        window.location.href = "http://baidu.com?time=" + timestamp;

    }

define(function(require, exports, module) {

    function fun(){
        var a = 'https://www.taobao.com/?a=1&b=2';
        var b = a.substring(a.indexOf('=')-1);
        var d = b.split('&')
        console.log(b);
        var c = {}
        for(i in d){
            var arr = d[i].split('=');
            c[arr[0]]=arr[1];
        }
        console.log(c);
    }

    module.exports.fun = fun;
});

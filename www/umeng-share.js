var exec = require('cordova/exec');
module.exports = {
    init:function (successHandler,errorHandler){
        exec(successHandler,errorHandler,"UMengSharePlugin","init",[]);
    },
    share:function (text,title,url,imgUrl,successHandler,errorHandler){
        exec(successHandler,errorHandler,"UMengSharePlugin","share",[text,title,url,imgUrl]);
    }
};
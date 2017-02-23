// 引入模块
var express = require('express');
var path = require('path');
//var ejs = require('ejs');
var pug = require('pug');

var app = express();
var router = require(path.resolve(__dirname,'app/routers/index'));

 app.use('/',router);  //挂载express的router。

// 设置views路径和模板
app.set('views', 'app/views');
// app.set('view engine', 'pug');
// app.engine('pug', pug.render);
// app.engine('html', ejs.renderFile);

// 静态文件配置
app.use('/app/build', express.static(path.join(__dirname, '/app/build')));

// 启动一个服务，监听从8888端口进入的所有连接请求
var server = app.listen(8000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
}); 
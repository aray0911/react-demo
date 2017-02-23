var express = require('express');
var router = express.Router();
var path = require('path');
var tool = require('../tool');
    //上边两行为标准代码，秩序改动下边中间代码即可。
var options = {
        root: path.resolve(__dirname,'../views/'),
        // dotfiles: 'deny',
        // headers: {
        //     'x-timestamp': Date.now(),
        //     'x-sent': true
        // }
      };
    /* GET home page. */
    router.get('/', function(req, res, next) {  
      res.sendfile("index.html",options, function (err) {
        if (err) {
          console.log(err);
          res.status(err.status).end();
        }
        else {
          console.log('Sent:index.html');
        }
      });
      //res.send("hello world");
    });
    router.get('/login', function(req, res, next) {
      res.sendfile("login.html",options, function (err) {
        if (err) {
          console.log(err);
          res.status(err.status).end();
        }
        else {
          console.log('Sent:login.html');
        }
      });
    });
    router.post('/login', function(req, res, next) {
      // console.log(req);
      let result = {
        success :true,
        sessionid : 123,
        user :"wr"
      }
      res.send(result);
      // req.session.user = res;
      // var name = req.fields.userName;
      // var password = req.fields.password;
      // console.log(`login post name ： ${name} pwd ： ${password}`);
      // res.redirect('/');

      // tool.post("api/user",options, function (err) {
      //   if (err) {
      //     console.log(err);
      //     res.status(err.status).end();
      //     res.redirect('/login');
      //   }
      //   else {          
      //     console.log('post:login.html  rec:' + res.toString());
      //     req.session.user = res;
      //   }
      // });
    });
    // router.get(':name', function (req, res, next) {

    //   var fileName = req.params.name;
    //   res.sendFile(fileName, options, function (err) {
    //     if (err) {
    //       console.log(err);
    //       res.status(err.status).end();
    //     }
    //     else {
    //       console.log('Sent:', fileName);
    //     }
    //   });

    // })

    module.exports = router;  //标准代码
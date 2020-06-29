// var history = require('connect-history-api-fallback');
// var express = require('express');
// var path = require('path');
// var serveStatic = require('serve-static');
// app = express();
// app.use(history());    
// app.use(serveStatic(__dirname + "/dist"));
// var port = process.env.PORT || 5000;
// app.listen(port);
// console.log('server started '+ port);

// // var history = require('connect-history-api-fallback');
// // var connect = require('connect');

// // var app = connect()
// //   .use(history())
// //   .listen(3000);
// //   var express = require('express');

// // var app = express();
// // app.use(history());
// // var middleware = history({});
// // history({
// //     index: '/index.html'
// //   });
// var express = require('express');
// var path = require('path');
// var serveStatic = require('serve-static');
// app = express();
// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, '/dist'), function(err) {
//       if (err) {
//         res.status(500).send(err)
//       }
//     })
//   })

// var https = require('https');
// var fs = require('fs');
// var https_options = {
// key: fs.readFileSync("./ssl/private.key"),
// cert: fs.readFileSync("./ssl/certificate.crt"),
// ca: [
// fs.readFileSync('./ssl/ca_bundle.crt')
// ]
// };
// https.createServer(https_options, function (req, res) {
//     res.writeHead(200);
//     res.end("Welcome to Node.js HTTPS Servern");
//     }).listen(5000)




var nodeStatic = require('node-static');
var https = require('https');
var file = new (nodeStatic.Server)();
const fs = require('fs');
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/allotpark.buzz/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/allotpark.buzz/cert.pem')
};
var app  = https.createServer(options, function (req, res) {
    file.serve(req, res);
}).listen(5000);
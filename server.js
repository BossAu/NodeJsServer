var libHttp=require("http");

libHttp.createServer(function (req, res){
  res.write('Test node Server');
  res.end();
}).listen(750);

var libHttp=require("http");

libHttp.createServer(function (req, res){
  res.write('hello');
  res.end();
}).listen(750);

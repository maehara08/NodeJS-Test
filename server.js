var http=require("http");

var server=http.createServer();

server.on('request',doRequest);
server.listen(process.env.PORT,process.env.IP) //第三引数にバックログ設定、第四にコールバック関数
console.log("Server is running");

function doRequest(req,res){
  //req がクライアントからのリクエスト情報、
  //res　がクライアントへ返す
  
  //Header情報書き出す
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("Hello world!");
  res.end();
  
}


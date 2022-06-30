var http = require('http');


var sever  =  http.createServer(function (req, res)  {
    res.end("hellow ")

});


sever.listen(3000, function () {
    console.log("listening on port 3000...");
});
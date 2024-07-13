var express = require("express");
var app = express();
var PORT = 3000;

app.get('*', function(req, res){

    const protocol = req.protocol;
    const host = req.host;
    const url = req.originalUrl;
    const port = process.env.PORT || PORT;
    const fullUrl = `${protocol}://${host}:${port}${url}`;
    const responseString = `Full URL is ${fullUrl}`;
    res.send(responseString);

});

app.listen(PORT, (error) => {
    if(!error){
        console.log("Server is successfully running and app is listening on port " + PORT);
    }
    else{
        console.log("Error ocuured, server can't start", error);
    }
});
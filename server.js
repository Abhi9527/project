const { response } = require("express");
const express= require("express");
const app= express();
app.get('/',function(req,resp)
{
resp.send("Hello world Good By");
});
app.listen(4000,function()
{
    console.log("Server running on 4000");

})


const { application } = require('express');
const express= require('express');
const app= express();


// app.get(route,callback);
app.get('/',(req,res)=> {
res.send("this is express")
});
app.get('/about',(req,res)=> {
    res.send("this is about of express")
    });

app.listen(8000,()=>{
    console.log("port is 8000");
})

 
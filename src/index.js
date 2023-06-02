const path = require('path')
const express= require('express');
const app= express();

//console.log(__dirname);

//const pth =console.log(path.join(__dirname,'../public'))


//built middleware
app.use('/static',express.static(path.join(__dirname,'../public')))

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

 
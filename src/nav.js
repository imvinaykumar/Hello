// www.anyweb.com - welcome home hompage
// /about- welcome about page 
// /contact- welcome about page 

const express=require('express')
const app= express()

app.get('/',(req,res)=> {
    //res.send("welcome home hompage")
    //for the html write
    res.write("<h1>welcome home hompage</h1>")
    res.write("<h1>welcome home hompage</h1>")
    res.send();
    });
app.get('/about',(req,res)=> {
        res.write("welcome about page ")
        });
app.get('/contact',(req,res)=> {
            res.send("welcome contact page  ")
            });
app.get('/temp',(req,res)=> {
     res.send({
        id:1,
        name :'vinay',
     })
 });


//JSON :
 app.get('/temo',(req,res)=> {
    res.send([{
       id:1,
       name :'vinay',
    }])
});

    app.listen(8000,()=>{
        console.log("port is 8000");
    })
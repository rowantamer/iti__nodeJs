let PORT = process.env.PORT || '7000';
const express = require('express');
let fs = require("fs");
let path = require('path');
let dataHtml = fs.readFileSync("../clientSide/welcome.html", "utf8");


const app =  express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var options = {
    root: path.join(__dirname , '../clientSide/')
};

app.get('/index.html' , (req , res)=>{

    var fileName = 'index.html' ;
    res.sendFile( fileName , options)

 })

app.get('/style.css' , (req , res)=>{

    var fileName = 'style.css' ;
    res.sendFile( fileName , options)

 })

app.get('/script.js' , (req , res)=>{

    var fileName = 'script.js' ;
    res.sendFile( fileName , options)

})

app.get('/welcome.html' , (req , res)=>{

    var fileName = 'welcome.html' ;
    res.sendFile( fileName , options)

})


app.get('/foxy.png' , (req , res)=>{

    var fileName = 'foxy.png' ;
    res.sendFile( fileName , options)

})
app.post('/welcome.html' ,(req , res)=>{

    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
   let address = req.body.address;
   dataHtml = dataHtml.replace("{name}", name);
   dataHtml = dataHtml.replace("{email}", email);
   dataHtml = dataHtml.replace("{phone}", phone);
  dataHtml = dataHtml.replace("{address}", address);
res.sendFile('/welcome.html' , options)

});

 
 app.listen(PORT,()=>{console.log("http://localhost:7000")});


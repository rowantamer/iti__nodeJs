const express = require('express');
const app = new express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 7005;
const studentRouter = require('./routes/studentRoute');
const courseRouter = require('./routes/courseRoute');


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());



app.use('/api/student' , studentRouter)



app.use('/api/course' , courseRouter)



app.listen(PORT, () => { console.log(`http://localhost:${PORT}`)})

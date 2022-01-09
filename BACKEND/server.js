const express = require('express') ;
const mongoose  = require('mongoose');
const bodyparser = require('body-parser');


const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

const uRouter = require("./src/routes/user");
app.use("/api",uRouter);


//======DB Connection =====

const connection = mongoose.connect("mongodb://localhost:27017/student",()=>{
    console.log("DB Connected")
});

//========Create server=========

app.listen('4000',()=> {
    console.log('Server running on port 4000')
})
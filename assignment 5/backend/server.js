const express = require('express');
const app = express();
const PORT=4000;
const cors=require('cors');
const mongoose =require('mongoose');
const {MONGOBD_URL}= require("./config")
const sale_r= require("./routes/sales_r")
const user_r = require("./routes/user_r")
mongoose.connect(MONGOBD_URL);
mongoose.connection.on('connected',()=>{
    console.log("DB connected")
})

mongoose.connection.on('error',(error)=>{
    console.log("Some error while connectinng to DB")
})
app.use(cors());
app.use(express.json());
app.use(user_r);
app.use(sale_r);

app.listen(PORT, ()=>{
    console.log("server started");
});

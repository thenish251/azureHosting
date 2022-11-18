const express = require('express');
const cors = require('cors');
require('./db/Config');
const User = require('./db/User');
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

 

app.post("/registers" , async(req,resp)=>{
    console.log("req.body" , req.body)
    let user=new User(req.body)
    let result=await user.save()
    resp.send(result)
})


app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.listen(PORT, (err) => {
    if(!err){
        console.log(`Connected on port: ${PORT}`);
    }
})
import express from "express";

const app = express();


app.get('/', (req,res)=>{
    res.send("server is ready");
});

app.listen(3000, ()=> {
    console.log('server started at http://localhost:3000 hello');
});

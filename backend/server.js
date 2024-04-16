const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app =express()
app.use(express.json());
app.use(cors())

 
const db =mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'manishdb'
})

app.get('/',(req,res) =>{
    return res.json("from the backend")
})

app.get('/users',(req,res)=>{
    const sql ="SELECT * FROM student";
    db.query(sql,(err,data)=>{
        if(err)return res.json(err);
        return res.json(data);

    })
})

app.post('/data',async(req,res)=>{
        const name=req.body.name;
        const phone=req.body.phone;
        const email = req.body.email;
        const msg = req.body.msg;

        const sql ="INSERT INTO student values (?,?,?,?)";
        db.query(sql,[name,phone,email,msg],(err,result)=>{
        if(err)throw error;
        res.send(req.body)
        })
})
app.delete("/delete/:name",(req,res)=>{
    console.log(req.params.name)
    db.query("DELETE FROM student WHERE name="+req.params.name,(err,result)=>{
    if(err)throw err;
    res.send(result)
      

 })
 app.put("/update/:name",(req,res)=>{
    console.log(params.name)
    const up_name=req.params.name;
    const email=req.body.email;
    const phone=req.body.phone;
    const msg=req.body.msg;
    db.query("UPDATE student SET email=?,phone=?,msg=? WHERE name=?",[email,phone,msg,up_name],(err,result)=>{
        if(err)throw err;
        res.send("posted");
        console.log(result);
    })

 })
})

app.listen(8081,()=>{
    console.log('listening......')
})
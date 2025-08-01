const express=require("express")

const app=express()
const db = require("./Database/dbconnection")

app.get("/",(req,res)=>{
    res.json({
        message:"this is get responsed"
    })
})

app.post("/books",(req,res)=>{
    res.json({
        message:"this is post method"
    })
})

app.delete("/book/:id",(req,res)=>{
    res.json({
        message:"Book deleted"
    })
})
 
app.patch("/book/:id",(req,res)=>{
    res.json({
        message:"book is updated"
    })
})

app.listen(3000,()=>{
    console.log("Server is started")
})

// postgresql://postgres.kvowbisplwefxromqvsk:SAASMERN8123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true
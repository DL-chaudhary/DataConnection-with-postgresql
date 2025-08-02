const express=require("express")
const { hooks } = require("./Database/dbconnection")

const app=express()
app.use(express.json())

app.get("/",async (req,res)=>{
   const datas= await hooks.findAll()
    res.json({
        message:"this is get responsed",
        data:datas
    })
})

app.post("/books",async (req,res)=>{
    // console.log(req.body)
    const {bookName,bookAuthor,bookPrice,bookGenre}=req.body
    await hooks.create({
        bookName:bookName,
        bookAuthor:bookAuthor,
        bookPrice:bookPrice,
        bookGenre:bookGenre
    })

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
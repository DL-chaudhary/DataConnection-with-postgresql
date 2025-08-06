const express=require("express")
const { hooks } = require("./Database/dbconnection")

const app=express()
app.use(express.json())

app.get("/books",async (req,res)=>{
    //  const id=req.params.id
    //  const datass= await hooks.findByPK(id)
   const datas= await hooks.findAll()
    res.json({
        message:"this is get responsed",
        data:datas
    
    })
})
   app.get("/books/:id",async (req,res)=>{
    const idd=req.params.id
    //   console.log(idd)
     const datass=await hooks.findByPk(idd)
    //  console.log(datass)
    res.json({
      message:"this is single page api",
      data: datass
    })
   })

   app.delete("/books/:id",async (req,res)=>{
      const id=req.params.id
         await hooks.destroy({
         where:{
             id
         }
    })
    res.json({
        message:"Deleted sucessfully done"
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


 
app.patch("/books/:id",async (req,res)=>{
    const id=req.params.id
     const {bookName,bookAuthor,bookPrice,bookGenre}=req.body
    await hooks.update({bookName:bookName,bookAuthor:bookAuthor,bookPrice:bookPrice,bookGenre:bookGenre},{
        where:{
            id:id
        }
     })

    res.json({
        message:"books API is updated"
    })
})

app.listen(3000,()=>{
    console.log("Server is started")
})



// const sequelize=require("sequelize")
//  const sequelize=sequelize.Sequelize
// const DataTypes=sequelize.DataTypes
 const {Sequelize,DataTypes}= require("sequelize")

const sequelize= new Sequelize("URI")
sequelize.authenticate()
.then(()=>{
    console.log("Authenticated vayo, connected !!")
})
.catch((err)=>{
    console.log("error",err)
})

const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize

db.books=require("./model/bookModel")(sequelize,DataTypes)

sequelize.sync({alter:false}).then(()=>{
    console.log("Migrate vyo hai ta")
})
module.exports=db
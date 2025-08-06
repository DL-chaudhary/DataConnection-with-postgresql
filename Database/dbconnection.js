
// const sequelize=require("sequelize")
//  const sequelize=sequelize.Sequelize
// const DataTypes=sequelize.DataTypes
 const {Sequelize,DataTypes}= require("sequelize")

const sequelize= new Sequelize("postgresql://postgres.kvowbisplwefxromqvsk:SAASMERN8123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true"); 
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

db.hooks=require("./model/bookModel")(sequelize,DataTypes)

sequelize.sync({alter:false}).then(()=>{
    console.log("Migrate vyo hai ta")
})
module.exports=db
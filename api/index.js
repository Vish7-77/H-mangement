require("dotenv").config({path:'./.env'})
const app  = require("./app")
const { connectDb } = require("./connectDb")
const PORT = process.env.PORT





connectDb()
app.listen(PORT,()=>{
    console.log("Server is live on", PORT)
})
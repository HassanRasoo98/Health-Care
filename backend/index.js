import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origion: true
}

app.get('/',(req,res)=>{
    res.send('Api is working')
})
//database connection
mongoose.set('strictQuery',false)
const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL,{
            userNewParser : true,
            useUnifiedTopology:true,
            
        })
        console.log("mongo connected")
    } catch (err) {
        console.log("mongo connection failed")

    }
}


// middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))


app.listen(port,() => {
    connectDB()
    console.log("Server is running on port" + port)
})
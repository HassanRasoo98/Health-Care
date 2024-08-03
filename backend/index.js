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
    } catch (err) {

    }
}


// middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))


app.listen(port,() => {
    console.log("Server is running on port" + port)
})
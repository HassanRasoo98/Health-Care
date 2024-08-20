import dotenv from 'dotenv'
 dotenv.config()
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import authRoute from './Routes/auth.js'
import userRoute from './Routes/user.js'
import doctorRoute from './Routes/doctor.js'
import reviewRoute from './Routes/review.js'


// dotenv.config()
const app = express()
const port = process.env.PORT 

const corsOptions = {
    // origin: true
}

app.get('/',(req,res)=>{
    res.send('Api is working')
})


// //database connection

mongoose.set('strictQuery',false)
const connectDB = async () => {
     try {
    await mongoose.connect(process.env.MONGO_URL,
       { useNewUrlParser: true,
        useUnifiedTopology:true
        }
    )
    
    console.log("MongoDB is connected")
    } 
    catch (err) {
        console.error("MongoDB connection error:", err.message);
    }
    
}


//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/api/v1/auth', authRoute) //domain api
app.use('/api/v1/users', userRoute) //domain api
app.use('/api/v1/doctors', doctorRoute) //domain api
app.use('/api/v1/reviews', reviewRoute) //domain api



app.listen(port, async() => {
    await connectDB()
    console.log("Server is running on port" + port)
})
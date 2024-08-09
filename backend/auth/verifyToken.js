import jwt from 'jsonwebtoken';
import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js'

export const authenticate = async (req, res, next) => {
    // Get token from the Authorization header
    const authToken = req.headers.authorization;

    // Check if the token exists and starts with 'Bearer'
    if (!authToken || !authToken.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'No Token, Authorization Denied' });
    }

    

    try {
        // Extract the token from the header
        const token = authToken.split(' ')[1]; // 'Bearer' is at index 0, token is at index 1
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        // // Attach user to the request object
         req.userId = decoded.id
         req.role = decoded.role;

        next(); //must be call the next function
    } catch (err) {
       if (err.name === 'TokenExpiredError'){
        return res.status(401).json({message:'Token is expired'})
       }
       return res.status(401).json({success: false, message:'Invalid Token'})
       
    }
}

export const restrict = roles => async(req,res,next) => {
    const userId = req.userId

    let user

    const patient = await User.findById(userId)
    const doctor = await Doctor.findById(userId)

    if(patient){
        user=patient
    }
    if(doctor){
        user=doctor
    }

    if(!roles.includes(user.role)){
       return res.status(401).json({success: false, message:'You are not authorized'})

    }
    next()
}




   
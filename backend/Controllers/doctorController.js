import Doctor from "../models/DoctorSchema.js"

export const updateDoctor = async (req, res) => {
    const id = req.params.id

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, 
            {$set:req.body}, 
            {new:true})
        res
        .status(200)
        .json({success:true, message:'Successfully Updated', data:updatedDoctor})
    }
    catch (err){
        res.status(500).json({success:false, message:'Failed to update'})

    }

}

export const deleteDoctor = async (req, res) => {
    const id = req.params.id

    try {
        await Doctor.findByIdAndDelete(id)
        res.status(200).json({success:true, message:'Successfully Deleted'})
    }
    catch (err){
        res.status(500).json({success:false, message:'Failed to delete'})

    }
}

export const getSingleDoctor = async (req, res) => {
    const id = req.params.id

    try {
        const doctor = await Doctor.findById(id).select('-password')
        res
        .status(200)
        .json({success:true, message:'Doctor Found', data:doctor})
    }
    catch (err){
        res.status(404).json({success:false, message:'no Doctor found'})

    }

}

export const getAllDoctor = async (req, res) => {
    

    try {
        const doctors = await Doctor.find({}).select('-password')
        res
        .status(200)
        .json({success:true, message:'Doctors Found', data:doctors})
    }
    catch (err){
        res.status(404).json({success:false, message:'no Doctor found'})

    }

}
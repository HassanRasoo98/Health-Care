import UserSchema from "../models/UserSchema.js";






export const updateUser = async (req, res) => {
    const id = req.params.id

    try {
        const updatedUser = await user.findByIdAndUpdate(id, 
            {$set:req.body}, 
            {new:true})
        res
        .status(200)
        .json({success:true, message:'Successfully Updated', data:updatedUser})
    }
    catch (err){
        res.status(500).json({success:false, message:'Failed to update'})

    }

}

export const deleteUser = async (req, res) => {
    const id = req.params.id

    try {
        await user.findByIdAndDelete(id)
        res.status(200).json({success:true, message:'Successfully Deleted'})
    }
    catch (err){
        res.status(500).json({success:false, message:'Failed to delete'})

    }
}

export const getSingleUser = async (req, res) => {
    const id = req.params.id

    try {
        const updatedUser = await user.findById(id)
        res
        .status(200)
        .json({success:true, message:'User Found', data:user})
    }
    catch (err){
        res.status(404).json({success:false, message:'Failed to update'})

    }

}
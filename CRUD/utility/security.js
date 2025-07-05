const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();
//generation du access Tocken
const generatedToken = (user,role,isActive)=>{
    return jwt.sign({ id: user._id,email:role,isActive:isActive},process.env.JWT_SECRET,{expiresIn: '15m'});
    
}
const refreshToken =(user) =>{
    
    return jwt.sign({
            id: user._id,
            email: user.email,
            role: user.role,
            isActive: user.isActive
        },process.env.JWT_REFRESH_SECRET,{expiresIn: "120h"})
}

module.exports ={generatedToken,refreshToken}
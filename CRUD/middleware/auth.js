const jwt  = require('jsonwebtoken');
const dotenv = require('dotenv')

dotenv.config();
//Auth checker
const auth = (req,res,next)=>{
   
    const tokenHeader  = req.headers.authorization;
    console.log("header token " + tokenHeader)
    if(!tokenHeader){
        return res.status(403).json("message: 'Token is required'");

    }

    const token_list = tokenHeader.split(' ');
    if(token_list[0]!== ('Bearer')){
        return res.status(403).json({"message" : "token should be Bearer"})
    }

    const token = token_list[1];
    if(!token){
        return res.status(403).json({"message" :'Token is required'});
    
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(decoded.id !== user_id){
            return res.status(403).json({"message" : 'token is required'})
        }
        console.log("Decoded",decoded)
    }catch(error){
        return res.status(405).send({"message" : error})
    }
    next();

};
module.exports = auth;
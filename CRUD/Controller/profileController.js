const Profile =  require("../Models/profile");
const register = async (req,res)=>{
    const {name,phone,departement,classe} = req.body;
    try{
            const profile = await Profile.create({name,phone,departement,classe});
            if(!profile){
                res.status(400).send({"Message":"Registration failed"});

            }else{
                res.status(201).send(profile);
            }
    }catch(error){
        res.status(500).send({"Message":"Registration failed " + error });
    }
    

}
module.exports = {register};
const loginUser= async(req,res)=>{
    // we get username and password in req
    
    res.send("Hello...");
}

const createUser= async(req,res)=>{
    // we get username, name, email,mobile number, pass
    // username & email should be unique
    
    res.send("Hello...");
}

module.exports={loginUser,createUser}
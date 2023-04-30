const newParkingLot= async(req,res)=>{
    // we get username, garage name, location details, seats in (s,m,l,e) and rates for all
    
    res.send("Hello...");
}

const myParkingLots=async(req,res)=>{
    // username in request 
    // response all parking lots owns by this user
}

const parkingLotDetails=async(req,res)=>{
    // get unique parking name and show rates for each type of slot
}

module.exports={newParkingLot, myParkingLots, parkingLotDetails}
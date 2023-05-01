const { v4: uuidv4 } = require('uuid');
const { pool } = require("../utils/db");

const newParkingLot= async(req,res)=>{
    // we get username, garage name, location details, seats in (s,m,l,e) and rates for all
    
    const { parkingName,location,zipCode, mobnum,smallPrice,medPrice,largePrice } = req.body;
    const parkingId=uuidv4();
    console.log(req.body, parkingName,zipCode);

    try {
        await pool.query(
            `INSERT INTO "parkinglot" VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, [parkingId,parkingName,location,zipCode, mobnum,smallPrice,medPrice,largePrice]); 
        return res.status(200).json({
            status:"sucessfully registered"
        });
        
    } catch (error) {
        console.error(error.stack);
        return res.status(404).json({
            status:"fail"
        });
    }
}

const myParkingLots=async(req,res)=>{
    // username in request 
    // response all parking lots owns by this user
}

const parkingLotDetails=async(req,res)=>{
    // get unique parking name and show rates for each type of slot
    const { parkingName } = req.body;

    try {
        const parkingLot=await pool.query(
            `SELECT * FROM "parkinglot" where name = ($1)`, [parkingName]); 
        console.log(parkingLot.rows[0]);

        if(parkingLot.rows[0]==undefined){
            return res.status(200).json({
                status:"please register first"
            });
        }

        else{
            return res.status(200).json({
                status:"sucessfully get data"
            });
        }

    } catch (error) {
        console.error(error.stack);
        return res.status(404).json({
            status:"fail"
        });
    }
}

module.exports={newParkingLot, myParkingLots, parkingLotDetails}
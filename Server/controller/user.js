const { pool } = require("../utils/db");
const { v4: uuidv4 } = require('uuid');

const loginUser = async (req, res) => {
    // we get email and password in req

    // console.log(req.body)
    const { email, pass } = req.body;

    try {
        const user=await pool.query(
            `SELECT * FROM "users" where email= ($1)`, [email]); 
        // console.log(user.rows[0]);

        if(user.rows[0]==undefined){
            return res.status(200).json({
                status:"please register first"
            });
        }

        else if(user.rows[0].pass==pass){
            return res.status(200).json({
                status:"sucessfully login"
            });
        }

        else{
            return res.status(200).json({
                status:"wrong password"
            });
        }

    } catch (error) {
        console.error(error.stack);
        return res.status(404).json({
            status:"fail"
        });
    }
}

const createUser = async (req, res) => {
    // we get name, email,mobile number, pass
    // email should be unique
    // console.log(req.body)
    const { userName, mobnum, email, userRole, pass } = req.body;
    const userId=uuidv4();

    try {
        await pool.query(
            `INSERT INTO "users" VALUES ($1, $2, $3, $4, $5, $6)`, [userId, userName, mobnum, email, userRole, pass]); // sends queries
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

module.exports = { loginUser, createUser }
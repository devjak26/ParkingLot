const express = require("express");
const {loginUser, createUser}=require("../controller/user.js");
const {newParkingLot, myParkingLots, parkingLotDetails}=require("../controller/parkingLot.js");
const {newreservation}=require("../controller/reservation.js");
const {newPayment,checkPayment}=require("../controller/payment.js");

const router  = express.Router();

router.post("/login", loginUser);
router.post("/register", createUser);
router.post("/newParkingLot", newParkingLot);
router.get("/myParkingLots",myParkingLots);
router.get("/parkingLotDetails",parkingLotDetails);
router.post("/newreservation",newreservation);
router.post("/newPayment",newPayment);
router.get("/checkPayment",checkPayment);

module.exports=router;
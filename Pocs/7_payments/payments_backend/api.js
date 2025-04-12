const express = require('express');
const app = express();
const dotenv = require('dotenv');
const Razorpay = require('razorpay');
dotenv.config();
const { PORT, RAZORPAY_PUBLIC_KEY, RAZORPAY_PRIVATE_KEY } = process.env;

const razoepayInstance = new Razorpay({
    key_id: RAZORPAY_PUBLIC_KEY,
    key_secret: RAZORPAY_PRIVATE_KEY
})

app.get("/", (req, res) => {
    console.log("get route is working");
    res.status(200).json({
        message: "received req"
    })
})

app.post("/checkout", (req, res) => {
    const amount = 100;
    const currency = "INR";
    const orderConfig = {
        amount: amount * 100,
        currency: currency,
    }
})

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
})
const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.json({ status: 400, message: error });
    }
});

router.post("/login", (req, res) => {
    console.log(`User information: ${req.body.email} ${req.body.password}`);
    res.status(200).send("User success logged!");
});

module.exports = router;

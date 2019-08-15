const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.json({ status: 400, message: error });
    }
});

router.get("/:userId", async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (error) {
        res.json({ status: 400, message: error });
    }
});

router.put("/:userId", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            req.body,
            { new: true }
        );
        res.json(updatedUser);
    } catch (error) {
        res.json({ status: 400, message: error });
    }
});

module.exports = router;

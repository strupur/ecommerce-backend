const express = require('express');
const router = express.Router();
// const User = require('../models/user.model');
const userControllers = require('../controllers/user.controllers');
const validation = require('../middlewares/auth');
const isAdmin = require("../middlewares/isAdmin");


router.get("/api/users", validation, userControllers.getUsers)

router.post("/api/users", [validation, isAdmin],  userControllers.createUser)

router.get("/api/users/:id", [validation, isAdmin], userControllers.getUserById)

router.delete("/api/users/:id", [validation, isAdmin],  userControllers.deleteUser)

router.put("/api/users/:id", [validation], userControllers.updateUser)

router.post("/login", userControllers.login)

module.exports = router;

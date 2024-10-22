const express = require('express');
const router = express.Router();
// const User = require('../models/user.model');
const userControllers = require('../controllers/user.controllers');
const validation = require('../middlewares/auth');
const isAdmin = require("../middlewares/isAdmin");

router.get("/users",  userControllers.getUsers)

router.post("/users", userControllers.createUser)

router.get("/users/:id", [validation, isAdmin], userControllers.getUserById)

router.delete("/users/:id", [validation, isAdmin], userControllers.deleteUser)

router.put("/users/:id", [validation], userControllers.updateUser)

router.post("/login", userControllers.login)

module.exports = router;

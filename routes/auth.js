const express = require("express")
const router = express.Router()
const app = express()
const path = require("path")
const http = require('http')
const authenticate = require('../authentication/auth')

let home = require("../controllers/auth").home

let login = require("../controllers/auth").login


let signup= require("../controllers/auth").signup


let adminLogin = require("../controllers/auth").adminLogin


let adminSignup = require("../controllers/auth").adminSignup


let getUsers = require("../controllers/auth").getUsers



router.post("/login",login)

router.post("/signup",signup)

router.post("/adminlogin",adminLogin)

router.post("/adminsignup",adminSignup)


router.post("/users",getUsers)

exports.router = router
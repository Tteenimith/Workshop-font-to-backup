const express = require("express")
const router = express.Router()

const {register,login,currentUser} = require("../controllers/auth")
const {
    registerValidate,
    loginValidate
} = require("../middlewares/validator")
const {auth} = require("../middlewares/auth")


//@ACCESS PUBLIC
router.post('/register',registerValidate,register)
router.post('/login',loginValidate,login)

//@ACCESS Private
router.post("/current-user",auth,currentUser)

module.exports = router
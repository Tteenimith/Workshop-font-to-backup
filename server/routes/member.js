const express = require("express")
const router = express.Router()
const {listMember,updateMember,deleteMember} = require("../controllers/member")

//import middleware
const {auth} = require("../middlewares/auth")


router.get('/member',listMember)
router.patch('/member/:memberId',auth,updateMember)
router.delete('/member/:memberId',auth,deleteMember)








module.exports = router
const express = require("express")
const router = express.Router()
const {markLandMark,listLandMark,deleteMap} = require("../controllers/landmark")

router.get("/landmark",listLandMark)
router.post('/landmark',markLandMark)
router.delete('/landmark/:id',deleteMap)


module.exports = router
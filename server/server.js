//Step 1 import
const express = require("express");
const app = express()
const morgan = require('morgan')
const cors = require("cors")

const {readdirSync} = require("fs")
const handlerError = require("./middlewares/error")
const notFound = require("./middlewares/not-found")
//Route
const authRouter = require('./routes/auth')
const memberRouter = require("./routes/member")

//Step 3 middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//step4 Routing
readdirSync("./routes")

app.use('/api',authRouter)
app.use('/api',memberRouter)



app.use(handlerError)
app.use("*",notFound)

//Step 2 start server
app.listen(5000,()=> console.log("server is running on port 5000"))
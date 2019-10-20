const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')

const messageRoutes = require('./routes/message')
const dashboardRoutes = require('./routes/dashboard')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.use(messageRoutes)
app.use(dashboardRoutes)

app.listen(5000, ()=>console.log(`Server started on PORT 5000`))
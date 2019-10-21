const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')

const messageRoutes = require('./routes/message')
const callRoutes = require('./routes/call')
const onWifiRoutes = require('./routes/onWifi')
const offWifiRoutes = require('./routes/offWifi')
const resetWifiRoutes = require('./routes/resetWifi')
const aboutmeRoutes = require('./routes/aboutme')
const dashboardRoutes = require('./routes/dashboard')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.use(messageRoutes)
app.use(callRoutes)
app.use(dashboardRoutes)
app.use(onWifiRoutes)
app.use(offWifiRoutes)
app.use(resetWifiRoutes)
app.use(aboutmeRoutes)



const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>console.log(`Server started on PORT ${PORT}`))
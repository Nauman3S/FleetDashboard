const express = require("express")

const router = express.Router()

const onWifiController = require('../controllers/onWifi')

router.post("/admin/wifiOn", onWifiController.onWiFiH)

module.exports = router

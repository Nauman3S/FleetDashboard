const express = require("express")

const router = express.Router()

const offWifiController = require('../controllers/offWifi')

router.post("/admin/wifiOff", offWifiController.offWiFiH)

module.exports = router

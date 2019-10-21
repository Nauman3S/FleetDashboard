const express = require("express")

const router = express.Router()

const resetWifiController = require('../controllers/resetWifi')

router.post("/admin/wifiReset", resetWifiController.resetWiFiH)

module.exports = router

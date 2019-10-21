
exports.onWiFiH = (req,res)=>{
    if (req.body.WiFiStates) {
    const wifiState = req.body.WiFiStates
    
    console.log("WiFi");

    console.log("State: ",wifiState);
    
    res.send('Received')
    } else{
        res.send('NO Message')
    }
    
}

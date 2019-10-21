
exports.makeCall = (req,res)=>{
    if (req.body.phoneNumber) {
    
    const pn= req.body.phoneNumber
    console.log("Call Pressed");

    
    console.log("Phone number", pn)
    res.send('Received')
    } else{
        res.send('NO Message')
    }
    
}

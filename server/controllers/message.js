
exports.sendMessage = (req,res)=>{
    if (req.body.message) {
    const message = req.body.message
    const pn= req.body.phoneNumber
    console.log("Send Pressed");

    console.log("Message: ",message);
    console.log("Phone number", pn)
    res.send('Received')
    } else{
        res.send('NO Message')
    }
    
}

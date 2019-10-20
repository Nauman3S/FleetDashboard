
exports.sendMessage = (req,res)=>{
    if (req.body.message) {
    const message = req.body.message
    console.log("Send Pressed");
    console.log("Message: ",message);
    res.send('Received')
    } else{
        res.send('NO Message')
    }
    
}

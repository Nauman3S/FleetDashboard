
exports.aboutmeH = (req,res)=>{
    if (req.body.Company) {
    const Company = req.body.Company
    const UserName  = req.body.UserName
    const Email = req.body.Email
    const FirstName = req.body.FirstName
    const LastName = req.body.LastName
    const City = req.body.City
    const Country = req.body.Country
    const PostalCode = req.body.PostalCode
    const AboutMe = req.body.AboutMe
    
    console.log("Update Profile");

    console.log("Profile: ",Company,UserName,Email,FirstName,LastName,City,Country,PostalCode,AboutMe);
    
    res.send('Received')
    } else{
        res.send('NO Message')
    }
    
}

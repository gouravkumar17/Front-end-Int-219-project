const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://gk1917:gk1917@cluster0.ez4qehi.mongodb.net/MainWebsiteProject")
.then(()=>{
    console.log("Contact us dataBase Connected");
})
.catch((err)=>{
    console.log(`Contact Us dataBase NOt connected ${err}`)
})


const ContactSchema = new mongoose.Schema({
    name:{
        type: String,
        require : true
    },
    email :{
        type : String,
        require : true
    },
    message :{
        type : String,
        require : true,
    }

})

const ContactMonogodb = new mongoose.model('ContactUsData',ContactSchema);
module.exports = ContactMonogodb;
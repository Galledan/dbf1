const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    admin_name: {type:String, required: true},
    admin_password: {type:String, required: true}, 
})

module.exports = mongoose.model("Admin", AdminSchema)
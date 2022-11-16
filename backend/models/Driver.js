const mongoose = require("mongoose")

const DriverSchema = new mongoose.Schema({
    driver_name: {type:String, required: true},
    driver_team: {type:String, required: true},
    driver_number: {type:String, required: true},
    driver_point: {type:String, required: true}
})

module.exports = mongoose.model("Driver", DriverSchema)
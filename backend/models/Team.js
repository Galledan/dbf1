const mongoose = require("mongoose")

const TeamSchema = new mongoose.Schema({
    team_name: {type:String, required: true},
    team_logo: {type:String, required: true},
    team_point: {type:String, required: true},   
})

module.exports = mongoose.model("Team", TeamSchema)
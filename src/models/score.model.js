const mongoose = require("mongoose")

const scoreSchema = new mongoose.Schema({
    name:{type:String,required:true},
    level:{type:String,required:true},
    score:{type:Number, default: 0},
    
})

const Score = mongoose.model( "score", scoreSchema)

module.exports = Score;
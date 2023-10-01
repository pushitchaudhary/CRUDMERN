const mongoose = require('mongoose');

// database connection 
exports.DatabaseConnection = ()=>{
    mongoose.connect('mongodb+srv://pushit:pushit9208@cluster0.xtgqtrs.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp')
    console.log("database connected")
}
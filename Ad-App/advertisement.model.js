const mongoose = require('mongoose');

const Advertisement = mongoose.model(
    "Advertisement",
    new mongoose.Schema({
        name:String,
        description:String,
        image_url:String,
        username:String,
        phone:String,
        price:String,
    })
)

module.exports = Advertisement
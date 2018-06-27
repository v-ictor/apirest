const mongoose = require("../connect");
var Schema = mongoose.Schema;
var contactSchema = Schema({
    name : String,
    lastname : String,
    phone : String,
    movil : String,
    email : String,
    city : String,
    photo : String,
    phoneFirst4Digits : Number
});
var contact = mongoose.model("contact", contactSchema);
module.exports = contact;
const mongoose = require("../connect");
var abcSchema = {
    name : String,
    lastname : String,
    yearOld : Number
};
var abc = mongoose.model("abc", abcSchema);
module.exports = abc;
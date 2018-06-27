const mongoose = require("../connect");
var Schema = mongoose.Schema;
var abcSchema = Schema({
    name : String,
    lastname : String,
    yearOld : Number
});
var abc = mongoose.model("abc", abcSchema);
module.exports = abc;
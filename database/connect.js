const mongoose = require("mongoose");
var host = "127.0.0.1";
mongoose.connect("mongodb://" + host + ":27017/homes", (error, db) => {
    if(error) {
        console.log('No es posible conectarse al servidor. Por favor, inicie el servidor. Error', error); 
    } else {
        console.log('Conexion exitosa el servidor Mongo !!!');
        
    }
});
module.exports = mongoose;
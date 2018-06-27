var express = require('express');
var router = express.Router();

// importando modelo de la base de datos
var Test = require("../../../database/collections/test");
var Contact = require("../../../database/collections/contact");

// funcion que permite controlar la id para que cumpla la el ObjectId de mongo
router.param((param, validator) => {
    return function (req, res, next, val) {
        if (validator.test(val) == true) {
            next();
        } else {
            res.status(400).json({error : "El id " + val + " , no cumple con el formato requerido."});
        }
    }
});
// parametro del id que debe cumplir
router.param('id', /^[a-z0-9]{24}$/);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ApirestServices' });
});

/* POST */
// Insertando Contactos
router.post('/contact', (req, res) => {
    var contact = {
        name : req.body.name,
        lastname : req.body.lastname,
        phone : req.body.phone,
        movil : req.body.movil,
        email : req.body.email,
        city : req.body.city,
        photo : req.body.photo,
        phoneFirst4Digits : req.body.phoneFirst4Digits
    };
    var contactData = new Contact(contact);
    contactData.save().then( () => {
        res.status(200).json({
            msn : "Contacto registrado con exito"
        });
    }).catch(err => {
        res.status(500).json({
            error : err
        });
    });
});
module.exports = router;
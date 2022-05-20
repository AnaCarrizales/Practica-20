//generamos instancia del router
//inyectamos dependecias
const express = require('express');
const router = express.Router();
const mongoose = require('../node_modules/mongoose');
let Person = require('../models/person');

//agregamos la ruta /persons por el método GET
router.get('/persons', function(req,res,next){
    Person.find(function (err,persons) {
        if (err) return next(err);
        res.json(persons);
    });
})

router.get('/person', function(req,res){
    res.render('person');
});

router.post('/addPerson', function(req,res){
    //  console.log(req.body);
    const myPerson = new Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss }); //crea la entidad
    myPerson.save(); //guarda en bd
});

//Exportamos el ruteador
module.exports=router;
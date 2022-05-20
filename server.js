//inyectamos dependencias
const mongoose = require('mongoose');
const express = require('express');
const personsRoutes=require('./routes/persons');

mongoose.Promise = global.Promise;
const app = express();

//configuramos view engine y el urlundercoded para parsear el body en las peticiones tipo POST
app.set('view engine','ejs');
app.use(express.urlencoded( {extended:false} ));
app.use(personsRoutes)

//Conectamos a la base de datos de Mongo
mongoose.connect(
    `mongodb+srv://AnaCarrizales:WSOPking@cluster0.ozcjg.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "conection error: "));
db.once("open", function () {
    console.log("Connected succesfully");
});

//levantamos el puerto
app.listen(3000);
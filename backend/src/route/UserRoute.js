const {Router} = require('express');

const router = Router();
const usersController = require("../controller/UserController");
/**
 * Este archivo contiene las rutas para cada acción del CRUD
 *los endpoints que figuran con un :identification se los conoce como
 *endpoints que poseen parámetros los cuales son colocados en la url 
 *al ser llamados desde afuera, ejemplo www.miweb.com/users/45025 
 *donde 45025 es el número de identificación del estudiante
*/


//Devuelve todos los estudiantes almacenados en la base de datos
router.get("/users", usersController.findAll);

//Devuelve un estudiante cuya identification se encuentre almacenado en la base de datos
router.get("/users/:identification", usersController.findOne);

//Registra un nuevo estudiante en la base de datos
router.post("/users", usersController.save);

//Actualiza un estudiante en la base de datos
router.put("/users/:identification", usersController.update);

//Elimina un estudiante de la base de datos
router.delete("/users/:identification", usersController.delete);

module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para verificar la existencia de un correo electrónico en la base de datos
router.post('/check', userController.check);


/*
// Rutas relacionadas con los usuarios
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
*/
module.exports = router;
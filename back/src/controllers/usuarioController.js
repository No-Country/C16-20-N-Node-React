import Usuario from "../models/usuario.js";
import crearRestaurante from "../controllers/restauranteController.js"


const crearUsuario = async (req, res) => {
    try {
        const { mail, password, rol } = req.body;
    
        const usuario = await Usuario.create({
            mail_usuario: mail,
            password: password,
            rol_usuario: rol
        });
    
        // Este condicional no sé donde debo colocarla para que dirija al endpoint que corresponda
        // if (rol === 'restaurant') {
        //     routerRestaurante.post("/restaurante/registro",...)
        // }

        // if (rol === 'cliente') {
        //     routerCliente.post("/cliente/registro",...)
        // }
    
        return usuario.id, usuario.rol_usuario
        //res.status(200).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ error: 'Ocurrió un error al crear el usuario' });
    }
};

module.exports = { crearUsuario };
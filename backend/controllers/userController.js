const connection = require('../db/dbConfig');

exports.check = (req, res) => {
    const { mail } = req.body;

    console.log('Correo electrónico recibido:', mail);

    const query = 'SELECT * FROM account WHERE mail = ?';
    connection.query(query, [mail], (error, results) => {
        if (error) {
            console.error('Backend: Error al ejecutar la consulta:', error);
            return res.status(500).json({ message: 'Backend: Error interno del servidor' });
        }

        console.log('Resultados de la consulta:', results);

        if (results.length > 0) {
            return res.status(200).json({ message: 'Backend: El correo electrónico ya existe' });
        } else {
            return res.status(200).json({ message: 'Backend: El correo electrónico no existe' });
        }
    });
};



/*
// Obtener todos los usuarios
exports.getAllUsers = (req, res) => {
    const query = 'SELECT * FROM useraccount';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener usuarios:', err);
            res.status(500).json({ error: 'Error al obtener usuarios' });
            return;
        }
        res.json(results);
    });
};

// Crear un nuevo usuario
exports.createUser = (req, res) => {
    const { email, password, user } = req.body;
    const query = 'INSERT INTO useraccount (email, password, user) VALUES (?, ?, ?)';
    db.query(query, [email, password, user], (err, results) => {
        if (err) {
            console.error('Error al crear usuario:', err);
            res.status(500).json({ error: 'Error al crear usuario' });
            return;
        }
        res.status(201).json({ message: 'Usuario creado exitosamente' });
    });
};

// Obtener un usuario por su ID
exports.getUserById = (req, res) => {
    const userId = req.params.id;
    const query = 'SELECT * FROM useraccount WHERE id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error al obtener usuario:', err);
            res.status(500).json({ error: 'Error al obtener usuario' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Usuario no encontrado' });
            return;
        }
        res.json(results[0]);
    });
};

// Actualizar un usuario existente
exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const { email, password, user } = req.body;
    const query = 'UPDATE useraccount SET email = ?, password = ?, user = ? WHERE id = ?';
    db.query(query, [email, password, user, userId], (err, results) => {
        if (err) {
            console.error('Error al actualizar usuario:', err);
            res.status(500).json({ error: 'Error al actualizar usuario' });
            return;
        }
        res.json({ message: 'Usuario actualizado exitosamente' });
    });
};

// Eliminar un usuario existente
exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    const query = 'DELETE FROM useraccount WHERE id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error al eliminar usuario:', err);
            res.status(500).json({ error: 'Error al eliminar usuario' });
            return;
        }
        res.json({ message: 'Usuario eliminado exitosamente' });
    });
};
*/
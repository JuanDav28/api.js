const bcrypt = require("bcryptjs");

// Método para modificar un usuario
const updateUser = (userId, newPassword) => {
      // Obtiene el usuario de la base de datos (id)
  const user = getUserById(userId);

      //verificacion de que existe user
  if (!user) {
    console.log('Usuario no encontrado');
    return;
  }


        const saltRounds = 10;    // Cifra la nueva contraseña

  bcrypt.hash(newPassword, saltRounds, function(err, hash) {
    if (err) {
      console.error(err);
      return;
    }

    // Actualiza la contraseña del usuario con hash cifrado
    user.password = hash;
    saveUser(user);

    console.log('Contraseña modificada correctamente');
  });
};



             // se modifica y cambio usuario (pendiente)
// Función para obtener un usuario por su ID
const getUserById = (userId) => {
  // Se Obtiene el usuario de la base de datos según su ID
  // y devuelve el objeto de usuario
};

const saveUser = (user) => {
};

    // Llama a la función para modificar un usuario
const userId = '005'; // Reemplaza con el ID del usuario que deseas modificar
const newPassword = 'juanddas'; // Lo remplaza con la nueva contraseña

updateUser(userId, newPassword);

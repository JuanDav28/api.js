const bcrypt = require("bcryptjs");


  const saltRounds = 10;    // Cifra la nueva contraseña
  const plainPassword = "juanddas";
  bcrypt.hash(newPassword, saltRounds, function (err, hash) {
    if (err) {
      console.error(err);
    }
    else{
      console.log('hash de la contraseña creado', hash)
    } 
  });

  const hashedPassword = '-';
  const loginPassword = 'juanddas';

  bcrypt.compare(loginPassword,hashedPassword,function(err, result){
    if(err){
        console.error(err);
    }
    else if(result){
        console.log("Contraseña válida");
    }
    else{
        console.log("Contraseña inválida");
    }
})











  // no use-----------------------------------------------------------------------------

// // se modifica y cambio usuario (pendiente)
// // Función para obtener un usuario por su ID
// const getUserById = (userId) => {
//   // Se Obtiene el usuario de la base de datos según su ID
//   // y devuelve el objeto de usuario
// };

// const saveUser = (user) => {
// };

// // Llama a la función para modificar un usuario
// const userId = '005'; // Reemplaza con el ID del usuario que deseas modificar
// const newPassword = 'juanddas'; // Lo remplaza con la nueva contraseña

// updateUser(userId, newPassword);

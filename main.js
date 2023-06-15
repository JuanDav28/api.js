const express = require("express"); //libreria...


const app = express(); //todos los metodos de la libreria se asignan aca

//constante de puerto
const port = 3000;

// ------------------------------------------------------------------------

// constante userRoutes--- se crea
const userRoutes = require("./routes/userRoutes");


app.use(express.json());



//informacion de base de datos

app.use('/users', userRoutes);

app.listen(port, () => {console.log("El servidor se ejecuta en http://localhost:" + port)})

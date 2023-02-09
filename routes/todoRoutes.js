//importa el metodo "router" desde el paquete express y se crea una instancia de el
const router = require("express").Router();
//importa el modelo de datos "Todo"
const Todo = require("../models/Todo");

//establece una ruta get para la raiz "/" y se proporciona un controlador de solicitudes para ella //el controlador de solicitudes toma dos argumentos "req"y "res" que presentan la solicitud y la respuesta
router.get("/", (req, res) => {
    //se esta llamando al metodo find del modelo Todo, se utiliza para recuperar todos los documentos de la coleccion "todo" //la funcion de devolucion de llamada recibira dos argumentps "err" y "result"
    
    Todo.find((err, result) => {
        //si existe un error al recuperar los documentos de la coleccion, se crea una nueva excepcion con el mensaje de error
        if(err) throw new Error(err);
        //se imprime el resultado en la consola
        console.log(result);
    });
});

router.post("/new", (req, res) =>{
    console.log(req.body);
});

//se exporta el objeto "router" como un modulo que puede ser importado en otro archivo
module.exports = router;
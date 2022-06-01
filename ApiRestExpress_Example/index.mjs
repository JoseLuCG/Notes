import express from 'express';
// const express = requestuire("express");

// Asignamos un número de puerto para acceder a la App
// Mira la linea ...
const port = 3000;

// Creamos la aplicación de Express y la configuramos
// para que 'entienda' los JSON incluidos en las peticiones.
const app = express();
app.use(express.json());

// Nuestra "base de datos".
const mockedUsers = [
    {
        name: "Maruxa",
        age: 23,
    },
]

/**
 * Aquí empezamos a definir "endpoints" de nuestra API.
 * Cada endpoint está definido por:
 * - Un método: get, push, put, patch, delete
 * - Una ruta (path)
 * - Un controlador: la función que atiende las 
 * peticiones a ese endpoint
 */

// Endpoint GET http://127.0.0.1:${port}/usuarios/
app.get(                            // Método
    '/usuarios/',                   // Ruta
    (request, response) => {        // Controlador
        const json = JSON.stringify(mockedUsers);
        response.send(json);
    }
);

// Endpoint POST http://127.0.0.1:${port}/usuarios/
app.post(                           // Metodo
    '/usuarios/',                   // Ruta
    (request, response) => {        // Controlador
    const usuario = request.body;
    const usersLenght = mockedUsers.push(usuario)
    response.send(`ok, ${usersLenght} users`);
})

// Le decimos a nuestra aplicación que empiece a escuchar
// las peticiones que lleguen al puerto asignado.
app.listen(port, () => {
    console.log(`Example app listening on http://127.0.0.1:${port}`)
})
const express = require('express');
const server = express();
const PORT = 3000;

// 1.- Agrega un endpoint '/api/' que responda a 
//     una petición de tipo GET con un código de estado 200 
//     y el siguiente json: 
//     {'mensaje':'hola mundo'}


// 2.- Agrega un endpoint '/api/suma' que responda a una 
//     petición de tipo GET con la suma de dos números que 
//     reciba mediante las querys num1 y num2. El servidor
//     debe responder con un código de estado 200 y un json 
//     como el siguiente:
//                 {'resultado': 7}
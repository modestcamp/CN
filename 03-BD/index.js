const mongoose = require('mongoose');
const express = require('express');
const server = express();
const PORT = 4000;

const MONGO_URI = 'mongodb://gabrielgonzalez:Ggc201040503@contversion-shard-00-00-vnoph.mongodb.net:27017,contversion-shard-00-01-vnoph.mongodb.net:27017,contversion-shard-00-02-vnoph.mongodb.net:27017/test?ssl=true&replicaSet=Contversion-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
    .then(()=> console.log('Conexion exitosa'))
    .catch(()=>console.log('Error en la conexion'));

// Mongoose es un ODM -> Object Document Mapping
// pets.create pets.find // pets es un MODELO
// Crear un modelo require de un ESQUEMA

const petsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    breed: String,
    sex: String,
    weight: Number,
    type: {
        type: String,
        required: true,
    },
    vaccine: [String],
});

const Pets = mongoose.model('Pets', petsSchema);


server.use(express.urlencoded({extended: true}));
server.use(express.json({ extended: true}));

server.get('/', (req, res) => {
    res.json({ message: 'Hello World'});
});


// CREATE 

server.post('/api/pets', (req, res) => {
    const { body } = req;
    Pets.create(body)
    .then(pet => res.status(201).json({ pet }))
    .catch(err => res.status(400).json({ err }));
    res.status(201).json({});
});

// READ (ALL)

server.post('/api/pets', (req, res) => {
    Pets.find(body)
    .then(pet => res.status(200).json({ pet }))
    .catch(err => res.status(400).json({ err }));
    res.status(201).json({});
});

// READ (ONE)

 server.get('/api/pets/:id', (req, res) => {
     const { id} = req.params;

     res.status(200).json({});
 });

// UPDATE 

server.post('/api/pets', (req, res) => {
    Pets.find(body)
    .then(pet => res.status(200).json({ pet }))
    .catch(err => res.status(400).json({ err }));
    res.status(201).json({});
});

// DELETE 

server.get('/api/pets/:id', (req, res) => {
    const { id } = req.params;
    res-status(204).json({});
})

server.listen(PORT, ()=> console.log(`Listening on ${PORT}`))


 
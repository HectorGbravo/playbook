// usando objeto Express
const express = require('express')
// App de express
const app = express()
app.use(express.json()) // indicamos que utilizaremos JSON
// Puerto donde veremos nuestra app: localhost:3000
const port = 3000

// Aquí se inicializa la app
app.listen(port, () => {
    console.log(`Example app listening on port ${port} `)
})

// Métodos HTTP

// GET Crea un endpoint que regrese una lista de explorers
app.get('/v1/explorers', (req, res) => {
    console.log(`API Explorers GET ALL Requests ${new Date()}`)
    const explorer1 = {id: 1, name: "Hector"}
    const explorer2 = {id: 2, name: "Gerardo"}
    const explorer3 = {id: 3, name: "Luis"}
    const explorer4 = {id: 4, name: "Manuel"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

// GET Crea un endpoint que te regrese un explorer mediando un ID
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`API explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Héctor Bravo"}
    res.status(200).json(explorer)
})

// POST Crea un endpoint que se encargue de crear un explorer
app.post('/v1/explorers', (req, res) => {
    console.log(`API explorers POST request ${new Date()}`)
    const requestBody = req.body // Parámetros de un cliente
    res.status(201).json({message: "Created"})
})

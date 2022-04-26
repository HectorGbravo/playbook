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
app.get('/v1/explorers', (req, res) => {
    console.log(`API Explorers GET ALL Requests ${new Date()}`)
    const explorer1 = {id: 1, name: "Hector"}
    const explorer2 = {id: 2, name: "Gerardo"}
    const explorer3 = {id: 3, name: "Luis"}
    const explorer4 = {id: 4, name: "Manuel"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

// utilizando un objeto express
const express = require('express')
// App de express
const app = express()
// Puerto que verá la App: localhost:3000
const port = 3000

// path inicial, responderá a la URL localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World')
})

// Con esto se inicializa la App
app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})

// Respondiendo texto 
// localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a Launchx de Microsoft')
})
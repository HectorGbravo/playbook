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


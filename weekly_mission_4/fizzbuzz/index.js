// Clase anterior con la que obtenemos los explorers
const Reader = require('./../fizzbuzz/lib/utils/Reader')
const ExplorerService = require('./../fizzbuzz/lib/services/ExplorerService')

const explorers = Reader.readJsonFile('./../fizzbuzz/app/explorers.json')

//console.log(explorers)


// Función de ExplorerService que filtra la lista de explorers por mission node

listaExplorers = ExplorerService.filterByMission(explorers, "node");
console.log(`Explorers filtrados por misión node:`)
console.log(listaExplorers) 

// Función de ExplorerService que filtra la cantidad de explorers por mission node

amountExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
console.log(`Explorers en Node: ${amountExplorers}`)

// Función de ExplorerService que filtra los nombres de usuario por mission node
userNameExplorers = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
console.log(`Usuarios en mission node: ${userNameExplorers}`)






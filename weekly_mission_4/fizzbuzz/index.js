// Clase anterior con la que obtenemos los explorers
const Reader = require('./../fizzbuzz/lib/utils/Reader')
const ExplorerService = require('./../fizzbuzz/lib/services/ExplorerService')

const explorers = Reader.readJsonFile('./../fizzbuzz/app/explorers.json')

//console.log(explorers)


// Aplicación del ExplorerService sobre la lista de explorers
ExplorerService.filterByMission(explorers, "node");
console.log("Explorers filtrados por misión node")
console.log(ExplorerService.filterByMission(explorers, "node"))

ExplorerService.getAmountOfExplorersByMission(explorers, "node");
ExplorerService.getExplorersUsernamesByMission(explorers, "node");
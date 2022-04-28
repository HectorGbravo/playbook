// Clase anterior con la que obtenemos los explorers
const Reader = require('./../fizzbuzz/lib/utils/Reader')
const ExplorerService = require('./../fizzbuzz/lib/services/ExplorerService')
const FizzbuzzService = require('./../fizzbuzz/lib/services/FizzbuzzService')


const explorers = Reader.readJsonFile('./../fizzbuzz/app/explorers.json')

console.log(explorers)


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

// Validaciones de Fizz, Buzz, FizzBuzz, score

const explorer1 = {name: "Explorer1", score: 1}
firstValidation = FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 
console.log(firstValidation)

const explorer3 = {name: "Explorer3", score: 3}
secondValidation = FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}
console.log(secondValidation)

const explorer5 = {name: "Explorer5", score: 5}
thirdValidation = FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}
console.log(thirdValidation)

const explorer15 = {name: "Explorer15", score: 15}
fourValidation = FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
console.log(fourValidation)



const Explorers = require("./../lib/utils/Reader")
const ExplorerService = require("./../lib/services/ExplorerService")
const FizzbuzzService = require("./../lib/services/FizzbuzzService")

describe("Unit test for Explorers class", () => {
    test("1. Read Json File", () => {
        const path = './../fizzbuzz/app/explorers.json'
        const explorer = Explorers.readJsonFile(path)
        expect(explorer).not.toBeUndefined()
        
    });
    test("2. ExplorerService: Filtrado de la lista de explorers por mission node", () => {
        const path = './../fizzbuzz/app/explorers.json'
        const explorer = Explorers.readJsonFile(path)
        const listaExplorers = ExplorerService.filterByMission(explorer, "node");
        expect(listaExplorers).not.toBeUndefined()
    });
    test("3. ExplorerService: Filtra la cantidad de explorers por mission node", () => {
        const path = './../fizzbuzz/app/explorers.json'
        const explorer = Explorers.readJsonFile(path)
        const cantidadExplorers = ExplorerService.getAmountOfExplorersByMission(explorer, "node");
        expect(cantidadExplorers).toBe(10)
    })
    test("4. ExplorerService: filtra los nombres de usuario por mission node", () => {
        const path = './../fizzbuzz/app/explorers.json'
        const explorer = Explorers.readJsonFile(path)
        const usernameExplorers = ExplorerService.getExplorersUsernamesByMission(explorer, "node");
        expect(usernameExplorers).not.toBeUndefined()
    })

})
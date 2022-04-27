const Explorers = require("./../app/app")

describe("Unit test for Explorers class", () => {
    test("1. Read Json File", () => {
        const explorer = new Explorers("Woopa1", "ajolonauta1", 1, "node",["javascript", "reasonML", "elm"])
        expect(explorer.name).toBe("Woopa1")
        expect(explorer.githubUsername).toBe("ajolonauta1")
        expect(explorer.score).toBe(1)
        expect(explorer.mission).toBe("node")
        expect(explorer.stacks[0]).toBe("javascript")
        expect(explorer.stacks[1]).toBe("reasonML")
        expect(explorer.stacks[2]).toBe("elm")
          
    });
})
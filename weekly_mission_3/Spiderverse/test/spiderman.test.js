const Spiderman = require("./../app/Spiderman");

describe("Unit test for Spiderman class", () => {
    test('1) Create a Spiderman object', () => {

        // En esta parte se escribe el código JS que se desea probar
        // Se va a instanciar el objeto Spiderman con la información siguiente:

        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

        // Se valida que el código funcione como se espera
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
    
    });
    test('2) Use the method getinfo()', () => {
        const tomHolland = new Spiderman("Spiderman Marvel", 25,"Tom Holland", 5, "Marvel") 
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    })
})
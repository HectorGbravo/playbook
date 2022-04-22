const User = require("./../../app/models/user")

describe("Unit test for user class",() => {
    test("1. Create an User object", () => {
        // se invoca el código a utilizar en la app
        const user = new User(1, "mexmovil", "HectorGbravo", "Bio", "dateCreated", "lastUpdated")
        // En esta parte se validan los resultados del código
        // Se comparan el valor de la izquierda (recibido) con el de la derecha (valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("mexmovil")
        expect(user.name).toBe("HectorGbravo")
        expect(user.bio).toBe("Bio")
        //expect(user.dateCreated).toBe("dateCreated")
        //expect(user.lastUpdated).toBe("lastUpdated")
    });

    test("2. Requeriment about dateCreated and lastupdated must be date types ", () => {
        const user = new User(1, "mexmovil", "HectorGbravo", "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("mexmovil")
        expect(user.name).toBe("HectorGbravo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined() // verifica el valor que no sea undefined
        expect(user.lastUpdated).not.toBeUndefined()
    });

    test("3. Adding getters", () => {

        const user = new User(1,"mexmovil", "HectorGbravo", "Bio")
        expect(user.getUsername).toBe("mexmovil")
        expect(user.getName).toBe("HectorGbravo")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined() // verifica el valor que no sea undefined
        expect(user.getLastUpdated).not.toBeUndefined()
    });
    
})
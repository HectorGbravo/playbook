const UserService = require('./../../app/services/UserService')

describe('Test for user service', () => {
    test('1. Create a new user using the UserService', () => {
        const user = UserService.create(1,"HectorGbravo", "Héctor Bravo")
        expect(user.username).toBe("HectorGbravo")
        expect(user.name).toBe("Héctor Bravo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})
const UserService = require('./../../app/services/UserService')

describe('Test for user service', () => {
    test('1. Create a new user using the UserService', () => {
        const user = UserService.create(1,"HectorGbravo", "Héctor Bravo")
        expect(user.username).toBe("HectorGbravo")
        expect(user.name).toBe("Héctor Bravo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test('2. Get all user data in a list',() => {
        const user = UserService.create(1,"HectorGbravo", "Héctor Bravo")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("HectorGbravo")
        expect(userInfoInList[2]).toBe("Héctor Bravo")
        expect(userInfoInList[3]).toBe("Sin Bio")
    })
    test('3. Update username',() => {
        const user = UserService.create(1,"HectorGbravo", "Héctor Bravo")
        UserService.updateUserUsername(user,"HectorBravo")
        expect(user.username).toBe("HectorBravo")
    })
    test('4. Given the list of users give me the list of usernames',() => {
        const user1 = UserService.create(1,"Hbravo01", "Héctor Bravo")
        const user2 = UserService.create(1,"Hbravo02", "Héctor Bravo")
        const user3 = UserService.create(1,"Hbravo03", "Héctor Bravo")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("Hbravo01")
        expect(usernames).toContain("Hbravo02")
        expect(usernames).toContain("Hbravo03")
    })

})
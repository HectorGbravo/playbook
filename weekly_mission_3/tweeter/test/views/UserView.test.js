const UserView = require('./../../app/views/UserView')

describe('Tests for Userview', () => {
    test ("1. Return an error object when try to create a new user with a null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        // https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/the payload does not exist/)

    })
    test ("2. Return an error object when try to create a new user with a payload with invalid properties", () => {
        const payload = {username: null, name:12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Error, the payload properties must be a valid value/)
    })
    test ("3. Return an error object when try to create a new user with a payload with missing properties",() => {
        const payload = {username: "Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Error, the payload properties must be a valid value/)
    })
})
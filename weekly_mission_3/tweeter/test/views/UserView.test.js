const UserView = require('./../../app/views/UserView')

describe('Tests for Userview', () => {
    test ("1. Return an error object when try to create a new user with a null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        // https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/the payload does not exist/)

    })

})
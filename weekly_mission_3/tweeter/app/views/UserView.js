const UserService = require('./../../app/services/UserService')

class UserView {
    static createUser(payload) {
        if(payload === null) {
            console.log("error, this is null")
            return {error: "the payload does not exist."}
        } else if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number') {
            console.log("los datos son válidos")
            console.log(payload.username)
            console.log(payload.name)
            console.log(payload.id)
            return UserService.create(payload.id, payload.username, payload.name)
        } else {
            console.log("errores de valor")
            return {error: "Error, the payload properties must be a valid value"}
        }
    }
}

module.exports = UserView
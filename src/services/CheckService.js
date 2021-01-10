import Api from './Api'

export default {
    register (cred) {
        return Api().post('register', cred)
    }
}

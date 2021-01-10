import Api from './Api'

export default {
    getData(path) {
        return Api().get(path)
    }
}

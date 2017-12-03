const list = require('./list')
const listRandom = require('./list-random')
const listSorted = require('./list-sorted')
module.exports = {
    get list() {
        return Array.from(list)
    },
    get listRandom() {
        return Array.from(listRandom)
    },
    get listSorted() {
        return Array.from(listSorted)
    }
}
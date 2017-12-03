module.exports = {
    get list() {
        return Array.from(require('./list'))
    },
    get listRandom() {
        return Array.from(require('./list-random'))
    },
    get listLarge() {
        const list = new Array(100000)
        for (let i = 0; i < list.length; i++) {
            list[i] = Math.round(Math.random() * list.length)
        }
        return list
    }
}
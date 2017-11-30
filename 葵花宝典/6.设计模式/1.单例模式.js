
class Singleton {

    constructor(name) {
        this.name = name
    }

}

Singleton.getInstance = (name) => {
    if (Singleton.instance) {
        return Singleton.instance
    } else {
        return Singleton.instance = new Singleton(name)
    }
}

module.exports = Singleton

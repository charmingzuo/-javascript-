const PRIVATE_HOOK = {}

class Singleton {

    // 对于有私有属性的语言来说，需要将构造函数标记为私有，避免外部创建
    // js没有原生私有语法，可以用一个闭包变量来hack
    /**
     * @private
     */
    constructor(...args) {
        if (args[1] !== PRIVATE_HOOK) {
            throw new Error('Singleton should instance by Singleton.getInstance(name)')
        }
        this.name = args[0]
    }

}

Singleton.getInstance = (name) => {
    if (Singleton.instance) {
        return Singleton.instance
    } else {
        return Singleton.instance = new Singleton(name, PRIVATE_HOOK)
    }
}

module.exports = Singleton

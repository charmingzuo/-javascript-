const assert = require('assert')
const Singleton = require('../1.单例模式')

describe('singleton', () => {
    it('should be same', () => {
        const a = Singleton.getInstance('hello')
        const b = Singleton.getInstance('world')
        assert.equal(a, b)
    })
})

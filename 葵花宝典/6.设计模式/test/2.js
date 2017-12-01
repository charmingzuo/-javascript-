const assert = require('assert')
const {Factory, Car, Tesla, BYD} = require('../2.工厂模式')

describe('factory', () => {
    it('should be a Tesla', () => {
        assert.deepEqual({name: 'Tesla'}, Factory.createInstance('tesla'))
    })

    it('should be a BYD', () => {
        assert.deepEqual({name: 'BYD'}, Factory.createInstance('byd'))
    })

    it('a BYD instance should be a instance of Car', () => {
        let byd = Factory.createInstance('byd')
        assert.equal(true, byd instanceof Car)
    })

    it('a BYD instance should not be a instance of Tesla', () => {
        let byd = Factory.createInstance('byd')
        assert.equal(false, byd instanceof Tesla)
    })

})

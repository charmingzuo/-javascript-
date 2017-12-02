const assert = require('assert')
const isLogarithm = require('../index')

describe('symmetry check', () => {
    it('should be a logarithm number', () => {
        assert.equal(true, isLogarithm(131))
        assert.equal(true, isLogarithm(123060321))
        assert.equal(true, isLogarithm(10101))
        assert.equal(true, isLogarithm(11))
        assert.equal(true, isLogarithm(0))
    })

    it('it should not a logarithm number', () => {
        assert.equal(false, isLogarithm(123))
        assert.equal(false, isLogarithm(332))
    })
})

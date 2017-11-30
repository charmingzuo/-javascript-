const assert = require('assert')
const isLogarithm = require('../index')

describe('logarithm check', () => {
    it('should be a logarithm number', () => {
        assert.equal(true, isLogarithm(131))
        assert.equal(true, isLogarithm(123060321), 'it should be a logarithm number')
        assert.equal(true, isLogarithm(10101), 'it should be a logarithm number')
        assert.equal(true, isLogarithm(11), 'it should be a logarithm number')
    })

    it('it should not a logarithm number', () => {
        assert.equal(false, isLogarithm(0), 'it should not a logarithm number')
        assert.equal(false, isLogarithm(123), 'it should not a logarithm number')
        assert.equal(false, isLogarithm(332), 'it should not a logarithm number')
    })
})

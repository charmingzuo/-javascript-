const assert = require('assert')
const test = require('../取球')

describe(`get balls game`, () => {

    describe(`range 1`, () => {
        const range = [1, 2, 4]

        it('should be defeat when balls count is 1', () => {
            assert.equal(test(1, range), 0)
        })
        it('should be win when balls count is 2', () => {
            assert.equal(test(2, range), 1)
        })
        it('should be win when balls count is 3', () => {
            assert.equal(test(3, range), 1)
        })
        it('should be defeat when balls count is 10', () => {
            assert.equal(test(10, range), 0)
        })
        it('should be win when balls count is 18', () => {
            assert.equal(test(18, range), 1)
        })
    })

    describe(`range 2`, () => {
        const range = [1, 3, 7, 8]

        it('should be defeat when balls count is 1', () => {
            assert.equal(test(1, range), 0)
        })
        it('should be win when balls count is 2', () => {
            assert.equal(test(2, range), 1)
        })
        it('should be defeat when balls count is 3', () => {
            assert.equal(test(3, range), 0)
        })
        it('should be win when balls count is 10', () => {
            assert.equal(test(10, range), 1)
        })
        it('should be defeat when balls count is 18', () => {
            assert.equal(test(18, range), 0)
        })
    })

})
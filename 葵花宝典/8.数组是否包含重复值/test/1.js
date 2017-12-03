const assert = require('assert')
const check = require('..')

describe('check array duplicated', () => {
    it('should has duplicated items', () => {
        assert.deepEqual(check([2, 0, 1, 3, 2]), 2)
        assert.deepEqual(check([0, 0, 1, 3, 2]), 0)
        assert.deepEqual(check([3, 1, 4, 2, 4]), 4)
    })
    it('should not has duplicated items', () => {
        assert.deepEqual(check([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), undefined)
        assert.deepEqual(check([10, 0, 9, 1, 8, 2, 7, 3, 6, 4, 5]), undefined)
    })
})

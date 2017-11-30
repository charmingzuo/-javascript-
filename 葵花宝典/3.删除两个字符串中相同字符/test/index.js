const assert = require('assert')
const {
    removeIntersection1,
    removeIntersection2
} = require('../index')

describe('remove same chars', () => {
    const str1 = 'If you shut the door to all errors'
    const str2 = 'truth will be shut out!'

    it('should be removed correctly', () => {
        assert.deepEqual(['Ifyda', 'wib!'], removeIntersection1(str1, str2))
    })

    it('should be removed correctly', () => {
        assert.deepEqual(['Ifyda', 'wib!'], removeIntersection2(str1, str2))
    })
})
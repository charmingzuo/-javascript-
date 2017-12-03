const assert = require('assert')
const sort = require('../6.插入排序')

describe('insert sort', () => {
    it('sort should be deep same with native sort', () => {
        const list1 = require('../../0.data').list
        const list2 = require('../../0.data').list

        sort(list2)
        list1.sort((a, b) => a - b)
        assert.deepEqual(list1, list2)
    })
})
const assert = require('assert')
const sort = require('../1.冒泡排序')

describe('bubble sort', () => {
    let list1 = require('../../0.data/list')
    let list2 = Array.from(list1)

    it('should be deep same', () => {
        sort(list1)
        list2.sort((a, b) => a - b)

        assert.deepEqual(list1, list2)
    })
})

const assert = require('assert')
const sort = require('../3.快速排序')

describe('quick sort', () => {
    let list1 = require('../../0.data').list
    let list2 = require('../../0.data').list

    it('should be deep same', () => {
        list1 = sort(list1)
        list2.sort((a, b) => a - b)

        assert.deepEqual(list1, list2)
    })
})

const assert = require('assert')
const sort = require('../8.二叉树排序')

describe('merge sort', () => {
    it('sort should be deep same with native sort', () => {
        let list1 = require('../../0.data').list
        let list2 = require('../../0.data').list

        list1 = sort(list1)
        list2.sort((a, b) => a - b)

        assert.deepEqual(list1, list2)
    })
})
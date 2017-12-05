const assert = require('assert')
const heapSort = require('../4.堆排序')

const listASC = require('../../0.data').list
listASC.sort((a, b) => a - b)
const listDESC = require('../../0.data').list
listDESC.sort((a, b) => b - a)

describe('heap sort', () => {
    it('sort asc should be same with native sort', () => {
        const list1 = require('../../0.data').list

        heapSort.asc(list1)
        assert.deepEqual(list1, listASC)
    })

    it('sort desc should be same with native sort', () => {
        const list1 = require('../../0.data').list

        heapSort.desc(list1)
        assert.deepEqual(list1, listDESC)
    })

})
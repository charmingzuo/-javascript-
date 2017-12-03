const assert = require('assert')
const getTopN = require('..')

let list1 = require('../../0.data').listLarge
let list2 = Array.from(list1)

let count = 100

list2.sort((a, b) => b - a)
let listLargest = list2.slice(0, count)

describe('get top-N', () => {
    it('should get top-N values', () => {
        const heap = getTopN(list1, count)
        heap.sort((a, b) => b - a)
        assert.deepEqual(heap, listLargest)
    })
})

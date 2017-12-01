const assert = require('assert')
const heapSortAD = require('../4.堆排序[支持顺序或倒序]')
const heapSort = require('../4.堆排序[顺序]')
let list = require('../../0.data/list')

describe('heap sort', () => {
    describe('with asc/desc', () => {
        it('sort should be deep same with native sort', () => {
            let list1 = Array.from(list)
            let list2 = Array.from(list)

            list2.sort((a, b) => a - b)

            heapSort(list1)
            assert.deepEqual(list1, list2)
        })
    })

    describe('with asc/desc', () => {
        it('sort asc should be deep same with native sort', () => {
            let list1 = Array.from(list)
            let listAsc = Array.from(list)

            listAsc.sort((a, b) => a - b)

            heapSortAD.asc(list1)
            assert.deepEqual(list1, listAsc)
        })

        it('sort desc should be deep same with native sort', () => {
            let list1 = Array.from(list)
            let listDesc = Array.from(list)

            listDesc.sort((a, b) => b - a)

            heapSortAD.desc(list1)
            assert.deepEqual(list1, listDesc)
        })
    })
})
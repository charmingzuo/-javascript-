const assert = require('assert')
const SinglyLink = require('../5.链表排序')

describe('link insert sort', () => {
    const list = require('../../0.data')
    const link1 = new SinglyLink(list)

    it('sort should be deep same with native sort', () => {
        link1.insertSort()
        list.sort((a, b) => a - b)

        assert.equal(link1.toString(), list.join(','))

        let cur = link1.head
        let length = 0
        while(cur = cur.next) {
            length++
        }
        assert.equal(length, list.length)
    })
})
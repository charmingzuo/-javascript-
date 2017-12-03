const assert = require('assert')
const SinglyLink = require('../4.链表反转')

describe('singly link reverse', () => {
    const list = 'ABCDEFGH'.split('')
    const link1 = new SinglyLink(list)

    it('The results by SinglyLink#reverse() and Array#reverse() should be same', () => {
        const list2 = Array.from(list)
        link1.reverse()
        list2.reverse()
        assert.equal(link1.toString(), list2.join(','))
        assert.equal(link1.length, list.length)
    })
})


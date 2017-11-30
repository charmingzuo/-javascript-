const assert = require('assert')
const SinglyLink = require('../4.链表反转')

describe('singly link reverse', () => {
    const list = 'hello'.split('')
    const link1 = new SinglyLink(list)

    it('SinglyLink#reverse() should be reversed', () => {
        link1.reverse()
        assert.equal(link1.toString(), 'o,l,l,e,h',)
    })

    it('The results by SinglyLink#reverse() and Array#reverse() should be same', () => {
        const list2 = Array.from(list)
        list2.reverse()
        assert.equal(link1.toString(), list2.join(','))
    })
})


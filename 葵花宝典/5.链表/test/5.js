const assert = require('assert')
const SinglyLink = require('../1.单向链表')
const DoublyLink = require('../2.双向链表')
const RingLink = require('../3.双向环形链表')
const detectLinkIsRing = require('../5.判断链表是否有环')

describe('detect ring link', () => {

    it('should be a ring link', () => {
        const link1 = new RingLink('hello'.split(''))
        assert.equal(true, detectLinkIsRing(link1))

        const link2 = new RingLink('he'.split(''))
        assert.equal(true, detectLinkIsRing(link2))
    })

    it('should not a ring link', () => {
        const link1 = new DoublyLink('hello'.split(''))
        assert.equal(false, detectLinkIsRing(link1))

        const link2 = new SinglyLink('hello'.split(''))
        assert.equal(false, detectLinkIsRing(link2))

        const link3 = new RingLink(['h'])
        assert.equal(false, detectLinkIsRing(link3))
    })
})


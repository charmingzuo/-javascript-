const assert = require('assert')
const DoublyLink = require('../2.双向链表')

describe('double link', () => {
    let link1

    beforeEach(() => {
        link1 = new DoublyLink('hello'.split(''))
    })

    it('the link should be initialized correctly', () => {
        assert.equal('^(h)e,h(e)l,e(l)l,l(l)o,l(o)$', link1.toString())
    })

    it('the link node should be added correctly', () => {
        link1.add('!')
        assert.equal('^(h)e,h(e)l,e(l)l,l(l)o,l(o)!,o(!)$', link1.toString())
    })

    it('the node in the link should be found', () => {
        const node1 = link1.findNodeByValue('e')
        assert.equal('e', node1.value)
    })

    it('the link node should be insert correctly', () => {
        link1.insertBefore(3, '~')
        assert.equal('^(h)e,h(e)l,e(l)~,l(~)l,~(l)o,l(o)$', link1.toString())
    })

    it('the link node should be removed correctly', () => {
        const node1 = link1.findNodeByValue('e')
        link1.remove(node1)
        assert.equal('^(h)l,h(l)l,l(l)o,l(o)$', link1.toString())
    })

    it('the link should be a doubly link', () => {
        let node1 = link1.findNodeByValue('o')
        assert.equal(node1.prev.next, node1)
        assert.equal(node1.prev.prev.next, node1.prev)

        node1 = link1.findNodeByValue('h')
        assert.equal(node1.next.prev, node1)
        assert.equal(node1.next.next.prev, node1.next)

        node1 = link1.findNodeByValue('l')
        assert.equal(node1.prev.next, node1)
        assert.equal(node1.prev.prev.next, node1.prev)
        assert.equal(node1.next.prev, node1)
        assert.equal(node1.next.next.prev, node1.next)

        assert.equal(undefined, link1.head.prev)
        assert.equal(undefined, link1.tail.next)
    })
})

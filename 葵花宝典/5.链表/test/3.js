const assert = require('assert')
const RingLink = require('../3.双向环形链表')

describe('ring link', () => {

    let link1

    beforeEach(() => {
        link1 = new RingLink('hello'.split(''))
    })

    it('the link should be initialized correctly', () => {
        assert.equal('o(h)e,h(e)l,e(l)l,l(l)o,l(o)h', link1.toString())
    })

    it('the link node should be added correctly', () => {
        link1.add('!')
        assert.equal('!(h)e,h(e)l,e(l)l,l(l)o,l(o)!,o(!)h', link1.toString())
    })

    it('the node in the link should be found', () => {
        const node1 = link1.findNodeByValue('e')
        assert.equal('e', node1.value)
    })

    it('the link node should be insert correctly', () => {
        link1.insertBefore(3, '~')
        assert.equal('o(h)e,h(e)l,e(l)~,l(~)l,~(l)o,l(o)h', link1.toString())
    })

    it('the link node should be removed correctly', () => {
        const node1 = link1.findNodeByValue('e')
        link1.remove(node1)
        assert.equal('o(h)l,h(l)l,l(l)o,l(o)h', link1.toString())
    })
})

const assert = require('assert')
const SinglyLink = require('../1.单向链表')

describe('dichotomy search', () => {
    let link1

    beforeEach(function () {
        link1 = new SinglyLink('hello'.split(''))
    })

    it('the link should be initialized correctly', () => {
        assert.equal('hello'.split('').join(','), link1.toString())
    })

    it('the link node should be added correctly', () => {
        link1.add('!')
        assert.equal('hello!'.split('').join(','), link1.toString())
    })

    it('the node in the link should be found', () => {
        const node1 = link1.findNodeByValue('e')
        assert.equal('e', node1.value)
    })

    it('the link node should be insert correctly', () => {
        link1.insertAfter(3, '~')
        assert.equal('hell~o'.split('').join(','), link1.toString())
    })

    it('the link node should be removed correctly', () => {
        const node1 = link1.findNodeByValue('e')
        link1.remove(node1)
        assert.equal('hllo'.split('').join(','), link1.toString())
    })
})
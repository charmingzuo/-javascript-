const assert = require('assert')
const SinglyLink = require('../1.单向链表')
const ifLinkHasCircle = require('../5.判断链表是否有环')

const newLink = (len, forkPoint = len / 2) => {
    const list = new Array(len).join('.').split('.').map((v, i) => i + 1)
    const link1 = new SinglyLink(list)

    let end = link1.head
    while (end.next) {
        end = end.next
    }

    if (forkPoint > -1) {
        let i = 0
        let circle = link1.head
        while (i++ < forkPoint) {
            circle = circle.next
        }
        end.next = circle
    }

    return link1
}

describe('detect circle link', () => {
    it('should be a circle link', () => {
        assert.equal(ifLinkHasCircle(newLink(20, 8)), true)
        assert.equal(ifLinkHasCircle(newLink(20, 0)), true)
    })
    it('should not be a circle link', () => {
        assert.equal(ifLinkHasCircle(newLink(20, -1)), false)
    })
})


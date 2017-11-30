const assert = require('assert')
const SinglyLink = require('../4.链表反转')

describe('singly link reverse', () => {
    const list = require('../../0.data/list')
    const link1 = new SinglyLink(list)

    it('SinglyLink#reverse() should be reversed', () => {
        link1.reverse()
        assert.equal(link1.toString(), '77,880,49,990,108,356,814,572,463,153,934,197,482,471,227,780,900,341,951,750,520,637,761,368,754,519,246,757,157,68',)
    })

    it('The results by SinglyLink#reverse() and Array#reverse() should be same', () => {
        const list2 = Array.from(list)
        list2.reverse()
        assert.equal(link1.toString(), list2.join(','))
    })
})


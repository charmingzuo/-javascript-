const assert = require('assert')
const dichotomySearch = require('../index')
const list = require('../../0.data/list-sorted')

describe('dichotomy search', () => {
    it('should not found', () => {
        assert.equal(-1, dichotomySearch(list, 24))
    })

    it('should be found', () => {
        assert.equal(list.indexOf(951), dichotomySearch(list, 951))
        assert.equal(list.indexOf(934), dichotomySearch(list, 934))
    })
})
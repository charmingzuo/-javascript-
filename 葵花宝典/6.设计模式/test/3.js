const assert = require('assert')
const observer = require('../3.观察者模式')

describe('observer', () => {

    it('should watch correctly', () => {
        let count1 = 0, count2 = 0
        observer.on('hello', () => {
            count1++
        })
        observer.on('hello', () => {
            count1++
        })
        observer.on('world', () => {
            count2++
        })
        observer.dispatch('hello')
        observer.dispatch('world')

        assert.equal(2, count1)
        assert.equal(1, count2)
    })

    it('should stop watch correctly', () => {
        let count1 = 0, count2 = 0
        let handler = () => {
            count1++
        }
        observer.on('hello', handler)
        observer.on('world', () => {
            count2++
        })

        observer.dispatch('hello')
        observer.off('hello', handler)
        observer.dispatch('hello')
        observer.dispatch('world')

        assert.equal(1, count1)
        assert.equal(1, count2)
    })

})

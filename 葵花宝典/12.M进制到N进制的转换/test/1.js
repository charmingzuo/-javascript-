const assert = require('assert')
const mod = require('..')

let list1 = require('../../0.data').list
let list2 = Array.from(list1)

describe('convert M based number to N based number', () => {
    it('M to 10', () => {
        let m, mv
        list1.forEach(v => {
            m = random2to36() // 随机进制
            mv = v.toString(m)
            assert.equal(mod.m2Decimal(mv, m), v)
        })
    })
    it('10 to N', () => {
        let n
        list1.forEach(v => {
            n = random2to36()
            assert.equal(mod.decimal2N(v, n), v.toString(n))
        })
    })
    it('M to N', () => {
        let m, n, mv, nv
        list1.forEach(v => {
            m = random2to36()
            n = random2to36()
            mv = v.toString(m)
            nv = v.toString(n)
            let r = mod.m2n(mv, m, n);
            // console.log(`把 ${v} 的 ${m} 进制(${mv})转换为 ${n} 进制(${nv})，转换结果为 ${r}`)
            assert.equal(r, nv)
        })
    })
})

const random2to36 = () => 2 + Math.round(Math.random() * (36 - 2))
const CHARS = '0123456789abcdefghijklmnopqrstuvwxyz'

exports.decimal2N = (v, n = 26) => {
    if (v === 0) return '0'
    if (isNaN(v)) return Number.NaN

    let o = []
    let r // 余
    let q // 商
    let s = '' // 符号
    if (v < 0) {
        s = '-'
        v = Math.abs(v)
    }

    q = v
    while (q > 0) {
        r = q % n
        q = Math.floor(q / n)
        o.push(CHARS[r])
    }
    o.reverse()
    return s + o.join('')
}

exports.m2Decimal = (v, m = 26) => {
    if (m === 10) {
        return 1 * v
    }
    v = v.toString()

    let o = 0
    let len = v.length
    let vn
    for (let i = v.length - 1; i >= 0; i--) {
        vn = CHARS.indexOf(v.charAt(i)) // to number
        o += vn * Math.pow(m, len - i - 1)
        // console.log(`${v[i]}*${m}^${len - i - 1}`)
    }
    return o
}

exports.m2n = (v, m, n) => {
    if (m === n) {
        return v.toString()
    }

    let v10 = this.m2Decimal(v, m)
    let vn = this.decimal2N(v10, n)
    return vn
}

// let n = 36;
// [0, 1, -10, 25, 26, 36].forEach(v => console.log([v, '的', n, '进制=', exports.decimal2N(v, n), v.toString(n)].join(' ')))
console.log(exports.m2Decimal('4t', 32))
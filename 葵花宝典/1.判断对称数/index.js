// 时间复杂度 O(n/2), n = number length
module.exports = n => {
    const s = String(n)

    let a = s
    let b = s.split('')
    b.reverse()
    b = b.join('')

    return a === b
}

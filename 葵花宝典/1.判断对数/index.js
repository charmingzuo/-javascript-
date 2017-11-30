// 时间复杂度 O(n/2), n = number length
module.exports = n => {
    if (typeof n !== 'number') {
        throw new Error('arg value should be a number')
    }

    let s = String(n)
    if (s.length < 2) {
        return false
    }

    let left, right
    let mid
    const offset = s.length % 2

    mid = (s.length - offset) / 2
    left = s.substr(0, mid)
    right = s.substr(mid + offset)

    const leftTmpArr = left.split('')
    leftTmpArr.reverse()
    left = leftTmpArr.join('')

    for (let i = 0; i < left.length; i++) {
        if (left[i] !== right[i]) {
            return false
        }
    }
    return true
}

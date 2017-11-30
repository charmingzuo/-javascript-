// 时间复杂度 O(n), 空间复杂度 O(n)
const removeIntersection1 = (str1, str2) => {
    const set = new Set()
    str1.split('').forEach(c => set.add(c))

    const inters = new Set()

    str2 = str2.replace(/./g, m => {
        if (set.has(m)) {
            inters.add(m)
            return ''
        } else {
            return m
        }
    })

    str1 = str1.replace(/./g, m => inters.has(m) ? '' : m)

    return [str1, str2]
}

// 时间复杂度 O(n), 空间复杂度 O(n)
// 去重->合并->排序，然后找到相邻的字符，即为交集
const removeIntersection2 = (s1, s2) => {
    if (typeof s1 !== 'string') {
        throw new Error('arg 1 should be a string')
    }
    if (typeof s2 !== 'string') {
        throw new Error('arg 2 should be a string')
    }
    if (s1.length === 0 || s2.length === 0) {
        return [s1, s2]
    }

    // 首先去重
    const a1 = Array.from(new Set(s1.split('')))
    const a2 = Array.from(new Set(s2.split('')))

    const mergedArray = a1.concat(a2)
    mergedArray.sort()

    const repeats = new Set()

    for (let i = 1; i < mergedArray.length; i++) {
        const prev = mergedArray[i - 1]
        const curr = mergedArray[i]
        if (prev === curr) {
            repeats.add(prev)
        }
    }

    const removeFromRepeats = chr => repeats.has(chr) ? '' : chr

    return [
        s1.replace(/./g, removeFromRepeats),
        s2.replace(/./g, removeFromRepeats)
    ]
}

module.exports = {
    removeIntersection1,
    removeIntersection2
}
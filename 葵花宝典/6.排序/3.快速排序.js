/**!
 * 时间复杂度 O(n log n)
 * 空间复杂度 O(1)
 * 稳定
 */

const quickSort = (list, random = true) => {

    // 基线条件
    if (list.length < 2) {
        return list
    }
    else {
        let mid

        // 随机取参照值，尽量避免最差的情况，时间复杂度为 O(n log n)
        if (random) {
            mid = list.splice(Math.floor(Math.random() * list.length), 1)[0]
        }
        // 每次都取第1个，对于已经排好序的数组来说，时间复杂度为 O(n²)
        else {
            mid = list.splice(0, 1)[0]
        }

        const low = []
        const high = []

        list.forEach(v => v < mid ? low.push(v) : high.push(v))

        // 递归条件
        return [].concat(quickSort(low, random), mid, quickSort(high, random))
    }
}

module.exports = quickSort
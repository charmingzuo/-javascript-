/**!
 * 时间复杂度 O(n²) ~ O(n²) ~ O(n²)
 * 空间复杂度 O(1)
 * 稳定
 */

module.exports = (list) => {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[i]) {
                const tmp = list[j]
                list[j] = list[i]
                list[i] = tmp
            }
        }
    }
}
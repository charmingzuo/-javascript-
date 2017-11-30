/**!
 * 时间复杂度 O(n) ~ O(n²)
 * 空间复杂度 O(1)
 * 不稳定
 */

module.exports = (list) => {
    for (let i = 0; i < list.length - 1; i++) {
        // 假设最小值的位置，如果经过下面的循环计算后，该位置发生了变化，则表示找
        // 到了更小的，需要将更小的值和当前 i 处的值进行交换
        let maybeMin = i

        for (let j = i + 1; j < list.length; j++) {
            if (list[maybeMin] > list[j]) {
                maybeMin = j
            }
        }

        // 如果 maybeMin 的位置发生了变化，则表示找到了更小的，替换下
        if (maybeMin !== i) {
            const tmp = list[maybeMin]
            list[maybeMin] = list[i]
            list[i] = tmp
        }
    }
}
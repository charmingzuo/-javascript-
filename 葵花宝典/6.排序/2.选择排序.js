module.exports = (list) => {
    for (let i = 0; i < list.length - 1; i++) {
        // 假设最小值的位置，如果经过下面的循环计算后，该位置发生了变化，则表示找
        // 到了更小的，需要将更小的值和当前 i 处的值进行交换
        let smaller = i

        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[smaller]) {
                smaller = j
            }
        }

        // 如果 smaller 的位置发生了变化，则表示找到了更小的，替换下
        if (smaller !== i) {
            const tmp = list[smaller]
            list[smaller] = list[i]
            list[i] = tmp
        }
    }
}
module.exports = (list) => {
    let q/*Left queue index*/
    let m/*Moving index*/
    let move

    // 循环数组每一个值
    for (m = 1; m < list.length; m++) {
        move = list[m]

        // 循环左侧序列并逐个对比，如果没有找到小于 m 的值（此时 q = -1），或找到不小于 m 的值（此时 q = x)，在 q + 1 位置填入 move 的值
        for (q = m - 1; q >= 0 && move < list[q]; q--) {
            list[q + 1] = list[q]
        }
        list[q + 1] = move
    }
}
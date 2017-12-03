// 判断长度为n的数组(值为0~n-1)数组中是否包含重复值.js

module.exports = (list) => {
    let v, o
    for (let i = 0; i < list.length;) {
        v = list[i]
        o = list[v]
        if (v !== i) { // 下标和数值不同，需要置换
            // 目标位置已经出现相同的值
            if (list[v] === v) {
                return v
            }
            // 将 i 所在的值置换到其对应的下标上
            else {
                list[v] = v
                list[i] = o
            }
        } else {
            i++
        }
    }

    return undefined
}


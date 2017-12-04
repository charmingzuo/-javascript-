// 判断长度为n的数组(值为0~n-1)数组中是否包含重复值.js

module.exports = (list) => {
    let v, o
    for (let i = 0; i < list.length; i++) {
        v = list[i]
        o = list[v]
        if (v !== i) { // 下标和数值不同，需要置换
            // 置换前检查，如果数值对应的下标位置已经出现"下标=值"的情况，则结束
            if (list[v] === v) {
                return v
            }
            // 将值放到对应的下标位置
            else {
                list[v] = v
                list[i] = o
            }
        }
    }

    return undefined
}


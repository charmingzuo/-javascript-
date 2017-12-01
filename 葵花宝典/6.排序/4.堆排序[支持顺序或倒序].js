module.exports = {
    asc: (list) => {
        heapSort(list, ASC)
    },
    desc: (list) => {
        heapSort(list, DESC)
    }
}

const heapSort = (list, dir) => {
    for (let i = Math.floor(list.length / 2); i >= 0; i--) {
        adjustHeap(list, list.length, i, dir)
    }

    for (let i = list.length - 1; i > 0; i--) {
        swap(list, 0, i)
        adjustHeap(list, i, 0, dir)
    }
}

const adjustHeap = (list, len, ni, dir) => {
    const k1i = kid1(ni)
    const k2i = kid2(ni)

    let kid2replace = ni

    if (k1i < len && compare(list[k1i], list[kid2replace]) === dir) { // k1i < len 用于判断子节点存在
        kid2replace = k1i
    }
    if (k2i < len && compare(list[k2i], list[kid2replace]) === dir) {
        kid2replace = k2i
    }

    if (kid2replace !== ni) {
        // 找到2个娃里面最大的，和他交换位置
        swap(list, ni, kid2replace)
        // 继续筛选子树
        adjustHeap(list, len, kid2replace, dir)
    }
}

const ASC = 1
const DESC = -1
const kid1 = k => 2 * k + 1
const kid2 = k => 2 * k + 2
const swap = (list, i, j) => {
    const t = list[i]
    list[i] = list[j]
    list[j] = t
}
const compare = (v1, v2) => {
    if (v1 > v2) {
        return ASC
    }
    else {
        return DESC
    }
}

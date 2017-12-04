const sort = (list) => {

    if (list.length < 2) {
        return list
    }

    // 递归
    const mid = Math.floor(list.length / 2)
    const subs = [
        list.slice(0, mid),
        list.slice(mid)
    ]

    return mergeSort(sort(subs[0]), sort(subs[1]))
}

const mergeSort = (listA, listB) => {
    let ai = 0, bi = 0, mi = 0
    let merge = new Array(listA.length + listB.length)
    while (ai < listA.length && bi < listB.length) {
        if (listA[ai] < listB[bi]) {
            merge[mi++] = listA[ai++]
        } else {
            merge[mi++] = listB[bi++]
        }
    }
    // 如果A还没有消耗完，表示A比较长，补到后面
    while (ai < listA.length) {
        merge[mi++] = listA[ai++]
    }
    while (bi < listB.length) {
        merge[mi++] = listB[bi++]
    }
    return merge
}

module.exports = sort
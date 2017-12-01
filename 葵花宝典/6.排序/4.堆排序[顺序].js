const sort = (list) => {
    for (let i = Math.floor(list.length / 2); i >= 0; i--) {
        adjustHeap(list, list.length, i)
    }

    for (let i = list.length - 1; i > 0; i--) {
        swap(list, i, 0)
        adjustHeap(list, i, 0)
    }
}

const adjustHeap = (list, len, ni) => {
    const kid1idx = 2 * ni + 1
    const kid2idx = 2 * ni + 2

    let larger = ni

    if (kid1idx < len && list[kid1idx] > list[larger]) {
        larger = kid1idx
    }
    if (kid2idx < len && list[kid2idx] > list[larger]) {
        larger = kid2idx
    }

    if (larger !== ni) {
        swap(list, ni, larger)
        adjustHeap(list, len, larger)
    }
}

const swap = (list, i, j) => {
    const t = list[i]
    list[i] = list[j]
    list[j] = t
}

module.exports = sort
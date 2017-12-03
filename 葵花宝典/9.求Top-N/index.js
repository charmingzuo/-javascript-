const topN = module.exports = (list, N) => {
    // 1. 初始化堆
    const heap = list.slice(0, N)

    // 2. 调整为小顶堆
    for (let i = Math.floor(heap.length / 2); i >= 0; i--) {
        adjustHeap(heap, heap.length, i)
    }

    // 3. 从数组中逐个取值与堆顶最小值进行比对，如果数组值更大，则替换堆顶并下沉
    for (let i = N; i < list.length; i++) {
        if (list[i] > heap[0]) {
            heap[0] = list[i]
            adjustHeap(heap, list.length, 0)
        }
    }

    return heap
}

const adjustHeap = (heap, len, ni) => {
    const smaller = getSmaller(heap, len, ni)
    if (smaller !== ni) {
        swap(heap, ni, smaller)
        adjustHeap(heap, len, smaller)
    }
}

const getSmaller = (heap, len, ni) => {
    const kid1idx = 2 * ni + 1
    const kid2idx = 2 * ni + 2
    let smaller = ni
    if (kid1idx < len && heap[kid1idx] < heap[smaller]) {
        smaller = kid1idx
    }
    if (kid2idx < len && heap[kid2idx] < heap[smaller]) {
        smaller = kid2idx
    }
    return smaller
}

const swap = (heap, i, j) => {
    const t = heap[i]
    heap[i] = heap[j]
    heap[j] = t
}

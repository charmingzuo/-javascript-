const sort = (list, results) => {
    if (list.length < 2) {
        return list
    }
    const mid = Math.floor(list.length / 2)
    const subs = [
        list.slice(0, mid),
        list.slice(mid)
    ]

    return mergeSort(sort(subs[0], results), sort(subs[1], results), results)
}

const mergeSort = (a, b, results) => {
    let ai = 0
    let bi = 0
    let mi = 0
    let m = new Array(a.length + b.length)
    let n
    while (ai < a.length && bi < b.length) {
        if (a[ai] < b[bi]) {
            m[mi++] = a[ai++]
        }
        else {
            n = m[mi++] = b[bi++]
            results.add(n)
        }
    }
    while (ai < a.length) {
        m[mi++] = a[ai++]
    }
    while (bi < b.length) {
        m[mi++] = b[bi++]
    }
    return m
}

let results = new Set()
// const list = [1, 7, 2, 9, 6, 4, 5, 13]
// const list = [1, 2, 3, 4, 5, 6, 7]
const list = [7, 6, 5, 4, 3, 2, 1]
sort(list, results)
console.log(results)
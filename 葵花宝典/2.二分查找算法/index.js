module.exports = (list, target) => {
    if (!Array.isArray(list)) {
        throw new Error('arg 1 should be an Array')
    }
    if (!(typeof target in {string: 1, number: 1})) {
        throw new Error('arg 2 should be a string or a number')
    }

    // TODO detect that the list is already sort correctly
    // ...

    let mid
    let low = 0
    let high = list.length - 1

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)
        const guess = list[mid]
        if (guess < target) {
            low = mid + 1
        } else if (guess > target) {
            high = mid - 1
        } else if (guess === target) {
            return mid
        }
    }

    return -1
}

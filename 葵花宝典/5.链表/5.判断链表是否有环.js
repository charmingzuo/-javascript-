module.exports = (link) => {
    if (link.length < 2) {
        return false
    }

    let p1, p2
    p1 = p2 = link.head

    while (p1.next && p2.next && p2.next.next) {
        p1 = p1.next
        p2 = p2.next.next
        if (p1 === p2) {
            return true
        }
    }

    return false
}



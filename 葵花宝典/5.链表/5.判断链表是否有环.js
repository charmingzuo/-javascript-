const detectLinkIsRing = (link) => {
    if (!link.head) {
        return false
    }

    const head = link.head
    let cur = head.next

    while (cur) {
        if (cur.next === head) {
            return true
        }
        cur = cur.next
    }

    return false
}

module.exports = detectLinkIsRing

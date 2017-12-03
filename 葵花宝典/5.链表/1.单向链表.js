class SinglyLink {

    constructor(array = []) {
        this.length = 0
        this.head = new LinkNode()

        if (array.length) {
            array.forEach(it => this.add(it))
        }
    }

    add(value) {
        const node = new LinkNode(value)
        const last = this.getLastNode()

        if (last) {
            last.next = node
        } else {
            this.head.next = node
        }
        this.length++
    }

    insertAfterHead(node) {
        node = node instanceof LinkNode ? node : new LinkNode(node)
        const oldHeadNext = this.head.next
        this.head.next = node
        node.next = oldHeadNext
        this.length++
    }

    insertAfter(index, valueOrNode) {
        if (index < 0 || index > this.length - 1) {
            throw new Error('index out of range')
        }

        const atNode = this.findNodeByIndex(index)

        const rawNext = atNode.next
        const newNode = atNode.next = new LinkNode(valueOrNode)
        if (rawNext) {
            newNode.next = rawNext
        }
        this.length++

        return true
    }

    remove(node) {
        if (!node || !(node instanceof LinkNode)) {
            throw new Error('arg 1 should be a LinkNode instance')
        }

        const prev = this.getPrev(node)
        if (!prev) {
            return false
        }

        prev.next = node.next
        node.next = undefined
        this.length--

        return true
    }

    findNodeByIndex(index) {
        let i = 0
        let cur = this.head.next

        while (cur) {
            if (index === i) {
                return cur
            }
            i++
            cur = cur.next
        }
        return undefined
    }

    findNodeByValue(value) {
        let cur = this.head.next
        let exist = false

        while (cur) {
            if (value === cur.value) {
                exist = true
                break
            }
            cur = cur.next
        }
        return exist ? cur : undefined
    }

    getPrev(node) {
        let cur = this.head.next

        while (cur) {
            if (node === cur.next) {
                return cur
            }
            cur = cur.next
        }
        return undefined
    }

    getLastNode() {
        let cur = this.head.next
        while (cur && cur.next) {
            cur = cur.next
        }
        return cur
    }

    swap(aPrev, a, bPrev, b) {
        const aNext = a.next
        const bNext = b.next
        aPrev.next = b
        b.next = aNext
        bPrev.next = a
        a.next = bNext
    }

    toString() {
        let s = []
        let cur = this.head.next
        while (cur) {
            s.push(cur.toString())
            cur = cur.next
        }
        return s.join(',') // + ' LEN=' + this.length
    }
}

class LinkNode {
    constructor(value) {
        this.value = value
        this.next = undefined
    }

    toString() {
        return String(this.value)
    }
}

SinglyLink.LinkNode = LinkNode

module.exports = SinglyLink

class DoublyLink {

    constructor(array = []) {
        this.head = new LinkNode()
        this.tail = new LinkNode()
        this.length = 0

        if (array.length) {
            array.forEach(it => this.add(it))
        }
    }

    add(value) {
        const newNode = new LinkNode(value)

        // 为空，添加1项，节点既是头也是尾
        if (this.length === 0) {
            this.head.next = this.tail.prev = newNode
            newNode.prev = this.head
            newNode.next = this.tail
        }
        // 追加到尾部
        else {
            const oldNode = this.tail.prev
            newNode.next = this.tail
            newNode.prev = oldNode
            oldNode.next = newNode
            this.tail.prev = newNode
        }
        this.length++
        return newNode
    }

    insertAfter(index, value) {
        if (index < 0 || index > this.length - 1) {
            throw new Error('index out of range')
        }

        const newNode = new LinkNode(value)
        const oldNode = this.findNodeByIndex(index)
        this.insertBetween(newNode, oldNode, oldNode.next)

        this.length++
        return newNode
    }

    insertBefore(index, value) {
        if (index < 0 || index > this.length - 1) {
            throw new Error('index out of range')
        }

        const newNode = new LinkNode(value)
        const oldNode = this.findNodeByIndex(index)
        this.insertBetween(newNode, oldNode.prev, oldNode)

        this.length++
        return newNode
    }

    remove(node) {
        let cur = this.head.next
        let exist = false

        while (cur) {
            if (cur === node) {
                exist = true
                break
            }
            cur = cur.next
        }

        if (exist) {
            const prev = node.prev
            const next = node.next
            prev.next = next
            next.prev = prev

            // 彻底孤立，避免脏引用导致死循环
            node.next = undefined
            node.prev = undefined

            this.length--
            return true
        }
        return false
    }

    findNodeByIndex(index) {
        let i = 0
        let cur = this.head.next

        while (cur && cur !== this.tail) {
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

        while (cur && cur !== this.tail) {
            if (value === cur.value) {
                exist = true
                break
            }
            cur = cur.next
        }
        return exist ? cur : undefined
    }

    insertBetween(newNode, node1, node2) {
        node1.next = newNode
        newNode.prev = node1

        node2.prev = newNode
        newNode.next = node2
    }

    toString() {
        let s = []
        let cur = this.head.next
        while (cur && cur !== this.tail) {
            s.push([
                cur.prev === this.head ? '^' : cur.prev.value,
                '(' + cur.toString() + ')',
                cur.next === this.tail ? '$': cur.next.value
            ].join(''))
            cur = cur.next
        }
        return s.join(',')
    }
}

class LinkNode {
    constructor(value) {
        this.value = value
        this.prev = undefined
        this.next = undefined
    }

    toString() {
        return String(this.value)
    }
}

module.exports = DoublyLink

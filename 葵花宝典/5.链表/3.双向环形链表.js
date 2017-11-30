class RingLink {

    constructor(array = []) {
        this.head = undefined
        this.tail = undefined
        this.length = 0

        if (array.length) {
            array.forEach(it => this.add(it))
        }
    }

    add(value) {
        const newTail = new LinkNode(value)

        // 为空，添加1项，节点既是头也是尾
        if (this.length === 0) {
            this.head = this.tail = newTail
            //newTail.next = newTail // 自闭环
        }
        // 如果长度为1，表示头尾相同，需要分离
        else if (this.length === 1) {
            this.tail = newTail
            this.head.next = this.head.prev = this.tail
            this.tail.prev = this.tail.next = this.head
        }
        // 追加到尾部，替换tail
        else {
            const rawTail = this.tail
            this.tail = newTail

            rawTail.next = newTail // rawTail.prev 不变

            this.head.prev = this.tail // head.next 不变
            this.tail.prev = rawTail
            this.tail.next = this.head
        }
        this.length++

        return newTail
    }

    insertBefore(index, value) {
        if (index < 0 || index > this.length - 1) {
            throw new Error('index out of range')
        }

        const newNode = new LinkNode(value)
        const rawNode = this.findNodeByIndex(index)

        // 先处理新节点的连接
        newNode.prev = rawNode.prev
        newNode.next = rawNode

        // 再将旧节点连接到新节点
        rawNode.prev.next = newNode
        rawNode.prev = newNode

        // 如果旧节点是头，则需要将新节点标记为新的头
        if (rawNode === this.head) {
            this.head = newNode
        }

        this.length++

        return newNode
    }

    remove(node) {
        let cur = this.head
        let exist = false

        while (cur) {
            if (cur === node) {
                exist = true
                break
            }
            cur = cur.next
        }

        if (exist) {
            if (node.prev) {
                node.prev.next = node.next
            }
            if (node.next) {
                node.next.prev = node.prev
            }

            if (node === this.head) {
                this.head = node.next
            }
            else if (node === this.tail) {
                this.tail = node.prev
            }

            this.length--
            return true
        }
        return false
    }

    findNodeByIndex(index) {
        let i = 0
        let cur = this.head

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
        let cur = this.head
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
        let cur = this.head

        while (cur) {
            if (node === cur.next) {
                return cur
            }
            cur = cur.next
        }
        return undefined
    }

    getLastNode() {
        let cur = this.head
        while (cur && cur.next) {
            cur = cur.next
        }
        return cur
    }

    toString() {
        let s = []
        let cur = this.head
        while (cur) {
            s.push([
                cur.prev ? cur.prev.toString() : '^',
                '(' + cur.toString() + ')',
                cur.next ? cur.next.toString() : '$'
            ].join(''))
            cur = cur.next

            // 回到了头部
            if (cur === this.head) {
                break
            }
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

module.exports = RingLink

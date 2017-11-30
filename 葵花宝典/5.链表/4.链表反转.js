const SinglyLink = require('./1.单向链表')

SinglyLink.prototype.reverse = function () {
    if (this.length < 2) {
        return
    }

    let prev = this.head
    let cur = prev.next

    while (cur) {
        const next = cur.next // 需要使用临时变量暂存next，否则会被替换掉
        cur.next = prev // 当前节点的next指向前一个节点

        // 为下一次循环做准备
        prev = cur // 当前节点作为下一次循环的前一节点
        cur = next // 下一个节点作为下一次循环的当前节点
    }

    this.head.next = undefined
    this.head = prev
}

module.exports = SinglyLink
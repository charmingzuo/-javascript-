const SinglyLink = require('../5.链表/1.单向链表')

module.exports = SinglyLink

SinglyLink.prototype.insertSort = function () {
    if (this.length < 2) {
        return
    }

    let q, qp, m, mp

    // 循环链表每一个值
    mp = this.head.next
    m = this.head.next.next // 从第2个节点开始
    while (m) {
        qp = this.head
        q = this.head.next
        while (q && q !== m) {
            if (m.value < q.value) {
                // m 插入到 q 前面
                qp.next = m
                const mNext = m.next
                m.next = q
                mp.next = mNext
                break
            }
            qp = q
            q = q.next
        }
        mp = m
        m = m.next
    }
}


// let array = new Array(100).join('.').split('').map(_ => Math.round(Math.random() * 100));
// let link1 = new SinglyLink(array);
// link1.insertSort2()
// array.sort((a, b) => a - b)
// console.log(link1.toString() === array.join(','))

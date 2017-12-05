module.exports = (list) => {
    if (list.length === 0) return list

    // 初始化树
    const r = new BTree(list[0])
    for (let i = 1; i < list.length; i++) {
        // 将元素插入树并下沉
        r.add(list[i])
    }

    const o = []
    r.serialize(o)

    return o
}

class BTree {
    constructor(v) {
        this.value = v
        this.left = this.right = undefined
    }

    add(v) {
        let dir = ''
        // 要插入的值如果小于就放左子，大于就放右子
        if (v < this.value) {
            dir = 'left'
        } else {
            dir = 'right'
        }

        // 如果没有对应的左子/右子，即创建，如果有了，就下沉
        if (!this[dir]) {
            this[dir] = new BTree(v)
        } else {
            this[dir].add(v)
        }
    }

    serialize(results) {
        if (this.left)
            this.left.serialize(results)
        results.push(this.value)
        if (this.right)
            this.right.serialize(results)
    }
}

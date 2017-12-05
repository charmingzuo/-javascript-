const sort = list => {

    const t = new BTree(list[0])
    for (let i = 1; i < list.length; i++) {
        t.add(list[i])
    }

    return t.toArray()
}

class BTree {
    constructor(v) {
        this.value = v
        this.left = this.right = undefined
    }

    add(v) {
        // 如果小于当前节点，则设置为当前节点的左子节点
        if (v < this.value) {
            // 如果左子节点不存在，则插入左侧
            if (!this.left) {
                this.left = new BTree(v)
            }
            // 如果左子节点已存在，则递归交给左子节点自己处理
            else {
                this.left.add(v)
            }
        }
        // （同上）
        else {
            if (!this.right) {
                this.right = new BTree(v)
            } else {
                this.right.add(v)
            }
        }
    }

    toArray() {
        let r = []
        if (this.left) {
            r = r.concat(this.left.toArray())
        }
        r.push(this.value)
        if (this.right) {
            r = r.concat(this.right.toArray())
        }
        return r
    }
}

module.exports = sort
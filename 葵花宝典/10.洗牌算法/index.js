const shuffle = module.exports = list => {

    let r, t
    for (let i = list.length - 1; i >= 0; i--) {
        r = Math.floor(Math.random() * (i + 1)) // 在 i 的基础上 +1，是因为 random() 包含下限0不含上限1
        t = list[i]
        list[i] = list[r]
        list[r] = t
        // console.log(`i=${i}, r=${r}`)
        // console.log(list.map((v, y) => y === i || y === r ? '[' + v + ']' : v).join(' '))
    }
}

const list = [5, 31, 67, 3, 2, 4, 6, 89, 2, 10, 0]
shuffle(list)
console.log(list)
module.exports = n => {
    const s = String(n)

    let a = s
    let b = s.split('')
    b.reverse()
    b = b.join('')

    return a === b
}

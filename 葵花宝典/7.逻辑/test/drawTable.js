for (let i = 1; i <= 8; i++) {
    let s = []
    for (let j = 0; j < 8; j++) {
        s.push(String.fromCharCode(65 + j) + i)
    }
    console.log(s.join('\t'))
}


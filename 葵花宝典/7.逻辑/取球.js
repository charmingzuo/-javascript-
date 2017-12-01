module.exports = (n, range) => {
    // 初始化 1~n 长度的数组，用于缓存以索引作为球数量时A的必胜局
    let list = new Array(n + range.length).join('.').split('').map(() => 0)

    // 如果只有1个小球，则A必输
    list[0] = 0

    for (let i = 1; i < n + 1; i++) {
        // 关键思路：如果指定数量小球是A的必输局，最后一个会被A拿，那么如果能再多几个球就会变成B输了
        if (!list[i]) {
            // 好，满足A的小愿望，我们加几个球呢？要确保B是最后选完的，那么这个增加的数量就在 range 里！
            range.forEach(r => list[i + r] = 1)
        }
    }

    return list[n]
}

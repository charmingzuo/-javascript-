"use strict";

function buildLink(array) {
    let link = {}
    if (array && array.length) {
        link = array.shift()
        let p, i = link
        while (p = array.shift()) {
            i.n = p
            i = p
        }
    }
    // link.HEAD = link
    return link
}

function setNext(p, next) {
    if (p) {
        p.n = next
    } else {
        p = next
    }
    return p
}

let link = buildLink([{v: 4}, {v: 5}, {v: 3}, {v: 2}, {v: 1}])
let link2 = buildLink([{v: 100}, {v: 90}, {v: 89}, {v: 102}, {v: 23}, {v:88}, {v:0}, {v:-100}, {v:-1}, {v:101}])

function getHead(link) {
    return link
}

function getNext(p) {
    return p && p['n'] || null
}

function forEach(link, fn = () => {
}) {
    let p = getHead(link)
    while (p) {
        fn(p)
        p = getNext(p)
    }
}

function append(link, item){
    let end
    forEach(link, i=>{
        end=i
    })
    setNext(end, item)
    return link
}


/**
 * 快速排序
 * @param link 链表
 */
function fastSort(link) {
    // console.log('---------------')
    // console.log('entry', link)
    //选基准，默认用第一个
    let p1
    let p0 = getHead(link) //指针定位于HEAD
    let pLesser = buildLink(), pGreater = buildLink() // 更小和更大的指针
    let pLesserEnd = pLesser, pGreaterEnd = pGreater
    //循环一次链表
    forEach(getNext(link), item => { //从第二个开始遍历
        // console.log(item)
        //判断大小分组
        if (item.v >= p0.v) {
            setNext(pGreaterEnd, item)
            pGreaterEnd = item
        } else {
            setNext(pLesserEnd, item)
            pLesserEnd = item
        }
    })
    //断开无效链接
    setNext(p0, null)
    setNext(pGreaterEnd, null)
    setNext(pLesserEnd, null)
    // 修正指针,由于一开始是用{}开头，需要去掉头
    pGreater = getNext(pGreater)
    pLesser = getNext(pLesser)
    // console.log('less:')
    // printLink(pLesser)
    // console.log('p0:')
    // printLink(p0)
    // console.log('greate:')
    // printLink(pGreater)
    // console.log('-------')
    //判断是否需要递归
    // console.log(getNext(pGreater))
    if (getNext(pGreater)) {
        pGreater = fastSort(pGreater)
    }

    if (pLesser) {
        pLesser = fastSort(pLesser)
    }
    p1 = setNext(p0, pGreater) //大于的直接设置下一个
    p1 = pLesser ? append(pLesser, p1) : p1 //小于的，需要在lesser最后一个设置next

    // console.log('less:')
    // printLink(pLesser)
    // console.log('p0:')
    // printLink(p0)
    // console.log('greate:')
    // printLink(pGreater)
    // console.log('p1:')
    // printLink(p1)
    // console.log('---------------')
    return p1

}

function printLink(link) {
    let s = []
    forEach(link, item => {
        // console.log(item)
        if (item && typeof item['v'] !== 'undefined')
            s.push(item['v'])
    })
    console.log('link:', s.join('->'), '\n')
    return s.join('->')
}
console.log('输入')
printLink(link)
console.log('结果：')
printLink(fastSort(link))
console.log('输入')
printLink(link2)
console.log('结果：')
printLink(fastSort(link2))
// printLink(link)
// printLink(append(link, {v:8}))
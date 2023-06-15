const a = (c = '😔') => {
    return new Promise((resolve) => {
        // 비동기 함수로직
        setTimeout(() => {
            resolve(`${c}`)
        }, 1 * 1000)
    })
}
//  여기서 ret는 리턴값(resolve)을 의미하나 보다.
a().then(ret => {
    console.log(ret);
    return a(`😊`)
}).then(ret => {
    console.log(ret)
})
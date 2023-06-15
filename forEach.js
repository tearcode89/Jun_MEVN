const func1 = (e, index) => {
    console.log(`${index}번째 요소는 ${e}입니다.`);
}
// e 는 아마도 element의 e인듯.......

const func2 = (e, index) => e * 2

const func3 = (prev, curr, index) => prev + curr

const func4 = e => e % 2 

// console.log(a);

const a = [1,2,3,4,5].forEach(func1);

const b = [1,2,3,4,5].map(func2);
console.log(b);

const c = [1,2,3,4,5].reduce(func3);
console.log(c);

const d = [1,2,3,4,5].filter(e => e%2)
console.log(d);
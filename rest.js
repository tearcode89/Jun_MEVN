const a = (b, ...rest) => {
    console.log(rest);
}

a(1,2,3);

const b = [1,2,3]
const a2 = (a,b,c) => console.log(a,b,c);

a2(...b);


const a3 = [1,2,3,4,5];
const [head, ...rest] = a3
console.log(head, rest);

const isAdultOption = e => e.age >= 21

const lesserafim = [
    // 2023.06.15 기준
    {"name" : '김채원', age: 22},
    {"name" : '사쿠라', age: 25},
    {"name" : '카즈하', age: 19},
    {"name" : '허윤진', age: 21},
    {"name" : '홍은채', age: 16},
]

const adultPerson = lesserafim.find(isAdultOption)

console.log(adultPerson);

const adultPersonIndex = lesserafim.findIndex(isAdultOption)
console.log(adultPersonIndex)



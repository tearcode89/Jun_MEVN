const job_1 = () => {
    const b = Math.random() * 100
    setTimeout(() => {
        console.log(1);
    },b)
}

const job_2 = () => {
    const b = Math.random() * 100
    setTimeout(() => {
        console.log(2)
    }, b)
}

const job_3 = () => {
    const b = Math.random() * 100
    setTimeout(() => {
        console.log(3)
    }, b)
}

job_1();
job_2();
job_3();
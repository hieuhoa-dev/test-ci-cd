export const Add = ( a: number, b: number, ...AnyNumbers: number[]) => {
    const extraSum = AnyNumbers.reduce((acc, val) => acc + val, 0);

    return a + b + extraSum;
};
// console.log(Add(2, 3, 4, 5));
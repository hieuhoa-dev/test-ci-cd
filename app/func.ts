export const Add = (a: number, b: number, ...AnyNumbers: number[]) => {
    const extraSum = AnyNumbers.reduce((acc, val) => acc + val, 0);

    return a + b + extraSum;
};
// console.log(Add(2, 3, 4, 5));

export function Divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}
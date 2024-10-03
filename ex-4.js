// Start coding here
let calculator = {
    add: (a,b) => Number(a) + Number(b),
    subtract: (a,b) => Number(a) - Number(b),
    multiply: (a,b) => Number(a) * Number(b),
    divide: (a,b) => Number(a) / Number(b)
};
let addResult = calculator.add(10,20);
console.log(addResult);
let divideResult = calculator.divide(3000,10);
console.log(divideResult);

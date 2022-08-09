// numbers are the same type
const myNumber = 1;
const anotherNumber = 2.3;
console.log(typeof myNumber);
console.log(typeof anotherNumber);

//methods
const manyDecimal = 1.23432546547475;
console.log(manyDecimal);

const twoDecimal = manyDecimal.toFixed(2);
console.log(twoDecimal);

// numbers and operators
let num = 1;
console.log(num++);
console.log(num);

const hisNum = num;
console.log(hisNum);

const singleQuote = 'this is a "single" quote';
const doubleQuote = "this is a double's quote";
console.log(singleQuote);
console.log(doubleQuote);

name = "chalin";
const greeting = `hello, ${name}`;
console.log(greeting);

const surname = "Yang";
const lastName = "chalin";
const literal = `${surname}${lastName}`;
console.log(literal);

const candidate = "Chalin";
const score = 9;
const maxScore = 10;
const output = `Hi ${candidate}, Your score is ${(score / maxScore) * 100}%.`;
console.log(output);

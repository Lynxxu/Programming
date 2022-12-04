let stringList = ["This", "Is", "Chalin"];
let output = "";
for (char of stringList) {
  output += char;
}
console.log(output);

let lst = [];

for (let i = 1; i <= 20000; i++) {
  sqr = i;
  if (sqr ** 2 % 7 === 0) {
    lst.push(Math.sqrt(sqr));
  }
}

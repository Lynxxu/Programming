// launch countdown

let output = document.querySelector(".output");
output.innerHTML = "";

let i = 10;
while (i >= 0) {
  const para = document.createElement("p");
  if (i === 10) {
    para.textContent = `Countdown 10\n`;
  } else if (i === 0) {
    para.textContent = `Blast off\n`;
  } else {
    para.textContent = `${i}\n`;
  }

  output.appendChild(para);
  i--;
}

const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// loop starts here
const matrix = [
  [1, 2, 3],
  [2, 3, 4],
  [5, 6, 7],
];

let matrixB = [];
for (let i = 0; i < 3; i++) {
  const templst = [];
  for (let j = 0; j < 3; j++) {
    let a = matrix[i][j];
    let b = a ** 3 - 7;
    templst.push(b);
  }
  matrixB.push(templst);
}
for (person of people) {
  if (person === "Phil" || person === "Lola") {
    refused.textContent += `${person}, `;
  } else {
    admitted.textContent += `${person}, `;
  }
}
admitted.textContent =
  admitted.textContent.slice(0, admitted.textContent.length - 2) + ".";
refused.textContent =
  refused.textContent.slice(0, refused.textContent.length - 2) + ".";

//这里代码的逻辑是使用slice来保留除最后一个逗号前面的所有内容，然后手动增加一个句号

let fib_seq = [1, 1];
for (value of fib_seq) {
  while (fib_seq.length <= 1000) {
    fib_seq.push(fib_seq[fib_seq.length - 1] + fib_seq[fib_seq.length - 2]);
  }
}
sum = 0;
for (n = 2; n < 1000; n++) {
  sum += fib_seq[n - 1] / (fib_seq[n] * fib_seq[n - 2]);
  console.log(sum);
}

console.log(fib_seq);
console.log(sum);

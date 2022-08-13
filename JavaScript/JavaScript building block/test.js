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
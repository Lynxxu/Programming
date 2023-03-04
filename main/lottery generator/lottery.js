function generateNum() {
  const lotteryNum = [];
  while (lotteryNum.length < 7) {
    let num = Math.floor(Math.random() * 50) + 1;
    if (!lotteryNum.includes(num)) {
      lotteryNum.push(num);
    }
  }
  return lotteryNum.join(",");
}

const LottoMax = document.getElementById("LottoMax");
const output = document.getElementById("LottoResult");

LottoMax.addEventListener("click", () => {
  output.textContent = generateNum();
});

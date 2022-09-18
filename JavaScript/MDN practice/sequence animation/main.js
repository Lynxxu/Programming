const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// 首先定义返回的animation对象，然后在下面使用promise chain，第一个then等待promise完成后运行里面的函数
// 然后第二个then将会以第一个then里面的函数返回内容，也就是另一个promise的结果来运行

alice1
  .animate(aliceTumbling, aliceTiming)
  .finished.then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
  .then(() => alice3.animate(aliceTumbling, aliceTiming));

// async就简单多了，async首先放在一个函数前面，代表是异步，然后在每一个会返回promise的函数（也就是异步函数）前加上
// await关键词，指定代码在await的位置等待后继续执行，这便是一个例子

// async function animateAll() {
//   await alice1.animate(aliceTumbling, aliceTiming).finished;
//   await alice2.animate(aliceTumbling, aliceTiming).finished;
//   await alice3.animate(aliceTumbling, aliceTiming).finished;
// }

// animateAll();

// callback hell来了，这里就是比较sb的代码，我自己都看不懂，别写

// alice1.animate(aliceTumbling, aliceTiming).finished.then(() => {
//   alice2.animate(aliceTumbling, aliceTiming).finished.then(() => {
//     alice3.animate(aliceTumbling, aliceTiming).finished;
//   });
// });

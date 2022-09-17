addEventListener("message", (message) => {
  if (message.data.command === "generate") {
    generatePrimes(message.data.quota);
  }
});

function generatePrimes(quota) {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
      return true;
    }
  }

  const primes = [];

  for (let i = 1; primes.length < quota; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  postMessage(primes.length);
}

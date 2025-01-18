// 2. Verificar se um número pertence à sequência de Fibonacci

function isFibonacci(n) {
    let fib = [0, 1];
    while (fib[fib.length - 1] < n) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }

    if (fib.includes(n)) {
        return `O número ${n} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${n} não pertence à sequência de Fibonacci.`;
    }
}

// Exemplo: Testando com o número 21, ele pertence à sequência de Fibonacci.
const numero = parseInt(21);
console.log(isFibonacci(numero));

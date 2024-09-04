/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/
const valor = 2

function pertenceAFibonacci(n) {
    let a = 0;
    let b = 1;
    let temp;

    if (n === 0 || n === 1) {
        return true;
    }

    while (b < n) {
        temp = a;
        a = b;
        b = temp + b;
    }

    return b === n;
}

if (pertenceAFibonacci(valor)) {
    console.log(`${valor} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${valor} não pertence à sequência de Fibonacci.`);
}
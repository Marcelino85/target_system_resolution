# Desafios de Lógica e Programação

Este repositório contém soluções para desafios técnicos voltados para exercícios de lógica de programação e análise de dados. Aqui você encontrará soluções implementadas com código claro, organizado e de fácil compreensão, acompanhadas de explicações detalhadas.

## Índice

Cálculo de Soma de Valores Incrementais

Verificação de Pertinência à Sequência de Fibonacci

Análise de Faturamento Diário

Percentual de Representação por Estado

Inversão de String

1. Cálculo de Soma de Valores Incrementais

Desafio:

Considere o seguinte código:

int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça {
    K = K + 1;
    SOMA = SOMA + K;
}
Imprimir(SOMA);

Questão: Qual será o valor da variável SOMA ao final do processamento?

Solução:

Resultado: 91.

Para mais detalhes, consulte o arquivo soma_incremental.js.

2. Verificação de Pertinência à Sequência de Fibonacci

Desafio:
Dada a sequência de Fibonacci (0, 1, 1, 2, 3, 5, 8, ...), crie um programa que informe se um número pertence à sequência.

Solução:
Implementação em JavaScript:

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

// Teste com o número 21
console.log(isFibonacci(21));

3. Análise de Faturamento Diário

Desafio:

Dado um vetor com o faturamento diário de uma distribuidora, crie um programa que:

Calcule o menor e maior valor de faturamento.

Identifique o número de dias em que o faturamento foi superior à média mensal.

Solução:
Implementação em JavaScript:

const faturamento = [221.55, 0, 320.4, 450, 0, 560.75, 140.3];

// Filtrar dias com faturamento
const diasComFaturamento = faturamento.filter(valor => valor > 0);

// Cálculos
const menor = Math.min(...diasComFaturamento);
const maior = Math.max(...diasComFaturamento);
const media = diasComFaturamento.reduce((acc, val) => acc + val, 0) / diasComFaturamento.length;
const diasAcimaMedia = diasComFaturamento.filter(valor => valor > media).length;

console.log(`Menor faturamento: ${menor}`);
console.log(`Maior faturamento: ${maior}`);
console.log(`Dias acima da média: ${diasAcimaMedia}`);

4. Percentual de Representação por Estado

Desafio:
Dado o faturamento mensal por estado:

SP: R$67.836,43

RJ: R$36.678,66

MG: R$29.229,88

ES: R$27.165,48

Outros: R$19.849,53

Calcule o percentual de representação de cada estado no total mensal.

Solução:
Implementação em JavaScript:

const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const total = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);

for (const [estado, valor] of Object.entries(faturamentoEstados)) {
    const percentual = (valor / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}

5. Inversão de String

Desafio:
Crie um programa que inverta os caracteres de uma string sem usar funções prontas.

Solução:

function reverseString(s) {
    let reversed = "";
    for (let i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }
    return reversed;
}

// Teste com a string "Desafio"
console.log(reverseString("Desafio"));

Como Executar os Códigos

Certifique-se de ter o Node.js instalado.

Clone este repositório:

git clone https://github.com/seuusuario/desafios-logica.git
cd desafios-logica

Execute os scripts:

node src/fibonacci.js
node src/faturamento.js
node src/inversao_string.js

Contato

Caso tenha dúvidas ou sugestões, sinta-se à vontade para abrir uma issue ou entrar em contato pelo meu LinkedIn.
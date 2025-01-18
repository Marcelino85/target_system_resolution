// 3. Cálculo de menor, maior e dias acima da média no faturamento diário


const faturamentoJson = `
[
    {"dia": 1, "valor": 221.55},
    {"dia": 2, "valor": 0},
    {"dia": 3, "valor": 320.40},
    {"dia": 4, "valor": 450.00},
    {"dia": 5, "valor": 0},
    {"dia": 6, "valor": 560.75},
    {"dia": 7, "valor": 140.30}
]
`;

const faturamento = JSON.parse(faturamentoJson);

// Filtrar dias com faturamento
const faturamentoValores = faturamento
    .filter(d => d.valor > 0)
    .map(d => d.valor);

// Calcular menor, maior e média
const menorValor = Math.min(...faturamentoValores);
const maiorValor = Math.max(...faturamentoValores);
const mediaMensal = faturamentoValores.reduce((sum, val) => sum + val, 0) / faturamentoValores.length;

// Dias acima da média
const diasAcimaMedia = faturamentoValores.filter(val => val > mediaMensal).length;

console.log(`Menor valor: ${menorValor}`);
console.log(`Maior valor: ${maiorValor}`);
console.log(`Dias acima da média: ${diasAcimaMedia}`);

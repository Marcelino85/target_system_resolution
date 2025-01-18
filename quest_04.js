//4. Percentual de representação por estado

const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcular o faturamento total
const total = Object.values(faturamentoEstados).reduce((sum, valor) => sum + valor, 0);

// Calcular e exibir o percentual de cada estado
for (const [estado, valor] of Object.entries(faturamentoEstados)) {
    const percentual = (valor / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}

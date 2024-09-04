/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/
const fs = require('fs');

const calcularFaturamento = () => {
    const data = fs.readFileSync('faturamento.json', 'utf8');
    const faturamento = JSON.parse(data);

    const diasComFaturamento = faturamento.filter(dia => dia.faturamento > 0);
    
    if (diasComFaturamento.length === 0) {
        console.log('Não houve faturamento no mês!');
        return;
    }

    const valoresFaturamento = diasComFaturamento.map(dia => dia.faturamento);
    const menorFaturamento = Math.min(...valoresFaturamento);
    const maiorFaturamento = Math.max(...valoresFaturamento);

    const totalFaturamento = valoresFaturamento.reduce(
        (acumulador, valorAtual) => acumulador + valorAtual, 0
    );
    const mediaFaturamento = totalFaturamento / diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.faturamento > mediaFaturamento).length;

    console.log(`Menor valor de faturamento ocorrido em um dia do mês: R$ ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior valor de faturamento ocorrido em um dia do mês: R$ ${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${diasAcimaDaMedia}`);
}

calcularFaturamento();

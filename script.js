document.getElementById("calculate").addEventListener("click", function() {
  const principal = parseFloat(document.getElementById("principal").value);
  const ratePercentage = parseFloat(document.getElementById("rate").value);
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);

  const daysInBaseMonth = 30;

  // Calcular juros em reais
  const interestInReal = (principal * ratePercentage) / 100;

  // Calcular juros diários
  const dailyInterest = interestInReal / daysInBaseMonth;

  // Calcular quantidade de dias
  const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Calcular juros totais
  const totalInterest = dailyInterest * diffDays;

  const totalAmount = principal + totalInterest;

  // Exibir os resultados
  document.getElementById("result").innerHTML = `
    Juros Totais: R$ ${totalInterest.toFixed(2)}<br>
    Valor Total: R$ ${totalAmount.toFixed(2)}<br>
    Quantidade de Dias: ${diffDays}
  `;
});
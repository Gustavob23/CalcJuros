document.getElementById("calculate").addEventListener("click", function() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);

  const daysInBaseMonth = 30;
  const daysInYear = 365;

  let diffDays = 0;
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    diffDays++;

    if (currentDate.getDate() === 31) {
      const monthlyInterest = (principal * rate * daysInBaseMonth) / (daysInYear * 100);
      const dailyInterest = monthlyInterest / daysInBaseMonth;
      const extraDayInterest = dailyInterest * (31 - daysInBaseMonth);
      diffDays += extraDayInterest;
    } else if (currentDate.getDate() === 28 || currentDate.getDate() === 29) {
      const monthlyInterest = (principal * rate * daysInBaseMonth) / (daysInYear * 100);
      const dailyInterest = monthlyInterest / daysInBaseMonth;
      const missingDaysInterest = dailyInterest * (daysInBaseMonth - currentDate.getDate());
      diffDays -= missingDaysInterest;
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  const totalInterest = (principal * rate * diffDays) / (daysInYear * 100);
  const totalAmount = principal + totalInterest;

  // Exibir os resultados
  document.getElementById("result").innerHTML = `
    Juros Totais: R$ ${totalInterest.toFixed(2)}<br>
    Valor Total: R$ ${totalAmount.toFixed(2)}<br>
    Quantidade de Dias: ${diffDays.toFixed(2)}
  `;
});

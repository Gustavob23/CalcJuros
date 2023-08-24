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
      diffDays += daysInBaseMonth - 1; // Calculate juros for 30 days
    } else if (currentDate.getDate() === 28) {
      diffDays -= 2; // Subtract 2 days for February
    } else if (currentDate.getDate() === 29) {
      diffDays--; // Subtract 1 day for February
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  const totalInterest = (principal * rate * diffDays) / (daysInYear * 100);
  const totalAmount = principal + totalInterest;

  // Exibir os resultados
  document.getElementById("result").innerHTML = `
    Juros Totais: R$ ${totalInterest.toFixed(2)}<br>
    Valor Total: R$ ${totalAmount.toFixed(2)}
  `;
});

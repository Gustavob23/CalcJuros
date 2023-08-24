document.getElementById("calculate").addEventListener("click", function() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);

  let currentDate = new Date(startDate);
  let diffDays = 0;

  while (currentDate <= endDate) {
    diffDays++;
    currentDate.setDate(currentDate.getDate() + 1);

    if (currentDate.getDate() === 31 || (currentDate.getMonth() === 1 && currentDate.getDate() === 29)) {
      currentDate.setMonth(currentDate.getMonth() + 1);
      currentDate.setDate(1);
    }
  }

  const totalInterest = (principal * rate * diffDays) / (30 * 100);
  const totalAmount = principal + totalInterest;

  // Exibir os resultados
  document.getElementById("result").innerHTML = `
    Juros Totais: R$ ${totalInterest.toFixed(2)}<br>
    Valor Total: R$ ${totalAmount.toFixed(2)}
  `;
});

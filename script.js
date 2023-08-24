document.getElementById("calculate").addEventListener("click", function() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);

  let currentDate = new Date(startDate);
  let diffDays = 0;

  while (currentDate <= endDate) {
    if (currentDate.getDate() === 31) {
      diffDays++;
    } else if (currentDate.getDate() === 30) {
      // Handle 30-day months
      if (currentDate.getMonth() === 3 || currentDate.getMonth() === 5 || currentDate.getMonth() === 8 || currentDate.getMonth() === 10) {
        diffDays++;
      }
    } else {
      diffDays++;
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  const totalInterest = (principal * rate * diffDays) / 30 / 100;
  const totalAmount = principal + totalInterest;

  // Exibir os resultados
  document.getElementById("result").innerHTML = `
    Juros Totais: R$ ${totalInterest.toFixed(2)}<br>
    Valor Total: R$ ${totalAmount.toFixed(2)}
  `;
});

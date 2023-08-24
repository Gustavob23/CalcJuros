document.getElementById("calculate").addEventListener("click", function() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);

  let diffDays = 0;

  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    diffDays++;
    currentDate.setMonth(currentDate.getMonth() + 1);
    currentDate.setDate(1);
    currentDate.setDate(31);
  }

  const totalInterest = (principal * rate * diffDays) / (30 * 100);
  const totalAmount = principal + totalInterest;

  // Exibir os resultados
  document.getElementById("result").innerHTML = `
    Juros Totais: R$ ${totalInterest.toFixed(2)}<br>
    Valor Total: R$ ${totalAmount.toFixed(2)}
  `;

  // Limpar os campos de entrada
  document.getElementById("principal").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("startDate").value = "";
  document.getElementById("endDate").value = "";
});

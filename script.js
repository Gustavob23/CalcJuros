document.getElementById("calculate").addEventListener("click", function() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);

  const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Difference in days

  const totalInterest = (principal * rate * diffDays) / (30 * 100); // Assuming 30 days in a month
  const totalAmount = principal + totalInterest;

  document.getElementById("result").innerHTML = `
    Juros Totais: R$ ${totalInterest.toFixed(2)}<br>
    Valor Total: R$ ${totalAmount.toFixed(2)}
  `;
});
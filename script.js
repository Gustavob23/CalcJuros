document.getElementById("calculate").addEventListener("click", function() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const startDateString = document.getElementById("startDate").value;
    const endDateString = document.getElementById("endDate").value;
  
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
  
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // Adding 1 to include both start and end days
  
    const monthlyInterest = (principal * rate * diffDays) / 30 / 100; // Assuming 30 days in a month
    const dailyInterest = monthlyInterest / 30; // Assuming 30 days in a month
  
    document.getElementById("result").textContent = `
      Juros Mensais: R$ ${monthlyInterest.toFixed(2)}
      Juros Diários: R$ ${dailyInterest.toFixed(2)}
    `;
  });
  
  
  
  
  
  
function sumExpenses(expenseList) {
  let totalExpenses = 0;
  expenseList.forEach((cost) => {
    const usedCurrency = cost.currency;
    const exchangeRate = cost.exchangeRates[usedCurrency].ask;
    const amountSpent = cost.value;
    const expense = exchangeRate * amountSpent;
    totalExpenses += expense;
  });
  return totalExpenses;
}

export default sumExpenses;

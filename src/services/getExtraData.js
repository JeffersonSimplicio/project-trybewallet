function getExtraData(expense) {
  const expenseCost = expense.value;

  const currencyInitials = expense.currency;

  const currencyName = expense.exchangeRates[currencyInitials].name;
  // console.log(typeof currencyName); // Teste

  const exchange = expense.exchangeRates[currencyInitials].ask;
  const exchangeNum = Number(exchange);
  // console.log(typeof exchangeNum); // Teste

  const convertedValue = exchangeNum * expenseCost;
  // console.log(typeof convertedValue); // Teste

  const extraData = {
    currencyName, // Moeda
    exchangeNum, // Câmbio utilizado
    convertedValue, // Valor convertido
  };

  return extraData;
}

export default getExtraData;

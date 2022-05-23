function newExpenseList(preEdition, editedExpense) {
  const posicion = editedExpense.id;
  const newList = [...preEdition];

  newList[posicion] = editedExpense;

  return newList;
}

export default newExpenseList;

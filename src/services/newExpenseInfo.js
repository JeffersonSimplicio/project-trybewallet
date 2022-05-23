function newExpenseInfo(state, editing) {
  const {
    value,
    description,
    selectCurrency,
    paymentMethod,
    category,
  } = state;
  const editingExpense = editing;

  editingExpense.value = value;
  editingExpense.description = description;
  editingExpense.currency = selectCurrency;
  editingExpense.method = paymentMethod;
  editingExpense.tag = category;

  return editingExpense;
}

export default newExpenseInfo;

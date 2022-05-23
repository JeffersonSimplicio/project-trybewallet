// Coloque aqui suas actions
const addUser = (userEmail) => ({
  type: 'USER_EMAIL',
  payload: userEmail,
});

export default addUser;

// Moedas disponiveis
const addCurrencies = (currencies) => ({
  type: 'CURRENCIES',
  payload: currencies,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    dispatch(addCurrencies(Object.keys(data)));
  };
}

// Salvando depensas
const addExpense = (data) => ({
  type: 'NEW_EXPENSE',
  payload: data,
});

export function newExpense(expense) {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    expense.exchangeRates = data;

    dispatch(addExpense(expense));
  };
}

// Deletar despesa
export const removeExpense = (deletedExpense) => ({
  type: 'REMOVAL_EXPENSES',
  payload: deletedExpense,
});

// Edição de despesa
export const expenseEdit = (editingExpense) => ({
  type: 'EDITING_EXPENSE',
  payload: editingExpense,
});

export const finishedEdit = (newExpenseList) => ({
  type: 'FINISHED_EDIT',
  payload: newExpenseList,
});

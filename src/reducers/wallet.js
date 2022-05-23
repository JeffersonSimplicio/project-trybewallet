// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: true,
  editing: {
    expense: [],
    situation: false,
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'CURRENCIES':
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };
  case 'NEW_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case 'REMOVAL_EXPENSES':
    return {
      ...state,
      expenses: action.payload,
    };
  case 'EDITING_EXPENSE':
    return {
      ...state,
      editing: {
        expense: action.payload,
        situation: true,
      },
    };
  case 'FINISHED_EDIT':
    return {
      ...state,
      expenses: action.payload,
      editing: {
        expense: [],
        situation: false,
      },
    };
  default:
    return state;
  }
}

export default wallet;

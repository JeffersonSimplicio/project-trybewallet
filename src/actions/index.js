// Coloque aqui suas actions
const addUser = (userEmail) => ({
  type: 'USER_EMAIL',
  payload: userEmail,
});

export default addUser;

const addCurrencies = (data) => ({
  type: 'CURRENCIES',
  payload: data,
});

export function fetchCurrencies() {
  console.log('fetchCurrencies');
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    dispatch(addCurrencies(Object.keys(data)));
  };
}

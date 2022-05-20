function deleteExpense(expenseList, deleted) {
  // console.log('Entrou deleteExpense'); // Teste

  const deletedNum = Number(deleted);
  const filteredList = expenseList.filter(({ id }) => id !== deletedNum);
  // console.log('Gasto removido, id ainda não foi organizado: ', filteredList); // Teste
  return filteredList;

  // PRECISA DISSO PARA FUNCIONAR CORRETAMENTE
  // OU UM ID QUE NÃO ESTEJA VINCULADO AO INDEX DO ELEMENTO NO ARRAY

  // const organizedIDS = [];
  // filteredList.forEach((expense, index) => {
  //   expense.id = index;
  //   organizedIDS.push(expense);
  // });

  // // console.log('id já foi reorganizado:', organizedIDS); // Teste

  // // console.log('-----FINAL DO CICLO-----'); // Teste
  // return organizedIDS;
}

export default deleteExpense;

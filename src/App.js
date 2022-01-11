import NewExpense from './components/NewExpense/NewExpense';
import { expenses } from './data/expense/expense';
import Expenses from './components/Expenses/Expenses';
import './partials/_setup.scss';
import { useState } from 'react/cjs/react.development';

function App() {
  const expenseData = [...expenses];
  const [newexpensedata, setNewExpenseData] = useState(expenseData);

  const addExpenseHandler = (expense) => {
    console.log('In app.js');
    console.log(expense);
    // setExpenseData([expense, ...expenseData]);
    setNewExpenseData((prevState) => {
      return [expense, ...prevState];
    })
  };


  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={newexpensedata} />
    </>
  );
}

export default App;

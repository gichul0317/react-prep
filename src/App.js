import ExpenseItem from './components/Expenseitem/Expenseitem';
import ExpenseDisplay from './components/ExpenseDisplay/ExpenseDisplay';
import NewExpense from './components/NewExpense/NewExpense';
import { render } from '@testing-library/react';
import { expenses } from './data/expense/expense';
import Expenses from './components/Expenses/Expenses';
import Card from './components/Card/Card';
import './partials/_setup.scss';

function App() {
  const expenseData = [...expenses];

  return (
    <Expenses data={expenseData} />
  );
}

export default App;

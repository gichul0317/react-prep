import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Todo from './components/Todo/Todo';
import ExpenseItem from './components/Expenseitem/Expenseitem';
import ExpenseDisplay from './components/ExpenseDisplay/ExpenseDisplay';
import './partials/_setup.scss';
import { render } from '@testing-library/react';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // const renderExpenses = function (item) {
  //   let renderArr = item.map(expense => {
  //     return (
  //       <ExpenseDisplay
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     )
  //   })
  //   return renderArr;
  // }

  return (
    <div className="App">
      <h1>Props pass from parent component to direct child component</h1>
      {/* {
        renderExpenses(expenses)
      } */}
      <ExpenseDisplay
        item={expenses}
      />
    </div>
  );
}

export default App;

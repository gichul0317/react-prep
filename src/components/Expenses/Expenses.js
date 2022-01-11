import { useState } from 'react/cjs/react.development';
import Card from '../Card/Card';
import ExpenseLists from '../ExpenseLists/ExpenseLists';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesChart from '../ExpensesChart/ExpensesChart';
import './Expenses.scss';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterHandler = (item) => {
    setFilteredYear(item);
  };

  const filteredExpenses = props.data.filter(item => {
    return item.date.getFullYear().toString() === filteredYear;
  })



  return (
    <>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterHandler} />
        {/* {
          filteredExpenses.length === 0 ?
            expensesContent
            : filteredExpenses.map((item, i) =>
              <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
            )
        } */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseLists items={filteredExpenses} />
      </Card>
    </>
  )
}

export default Expenses;
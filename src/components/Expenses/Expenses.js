import ExpenseItem from '../Expenseitem/Expenseitem';
import Card from '../Card/Card';
import './Expenses.scss';

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem data={props.data} />
    </Card>
  )
}

export default Expenses;
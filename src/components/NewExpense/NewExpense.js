import '../NewExpense/NewExpense.scss';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

function NewExpense() {
  const submittedDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    }
    console.log(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        submittedData={submittedDataHandler}
      />
    </div>
  )
}

export default NewExpense;
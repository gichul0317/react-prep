import { useState } from 'react/cjs/react.development';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import '../NewExpense/NewExpense.scss';

function NewExpense(props) {
  const [form, setForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setForm(!form);
  };

  const showFormHandler = () => {
    setForm(!form);
  }

  return (
    <div className="new-expense">
      {!form && <button onClick={showFormHandler}>Add New Expense</button>}
      {form && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={showFormHandler} />}
    </div>
  )
}

export default NewExpense;
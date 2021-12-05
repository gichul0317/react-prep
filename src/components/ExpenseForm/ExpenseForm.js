import { useState } from 'react';
import '../ExpenseForm/ExpenseForm.scss';

function ExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleHandler = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  }

  const amountHandler = (e) => {
    setAmount(e.target.value);
  }

  const dateHandler = (e) => {
    setDate(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    console.log(expenseData);

    // delete inputs and back to initial state
    setTitle('');
    setAmount('');
    setDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={titleHandler} value={title} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" min="0.01" step="0.01" id="amount"
            onChange={amountHandler}
            value={amount}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" min="2019-01-01" max="2022-12-31"
            onChange={dateHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new--expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;
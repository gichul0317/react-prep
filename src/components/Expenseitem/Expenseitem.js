import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';
import { useState } from 'react';
import '../Expenseitem/Expenseitem.scss';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const btnHandler = () => {
    setTitle('updated...');
  }

  return (
    <>
      <Card className="expense">
        <ExpenseDate
          date={props.date}
        />
        <div className="expense__description">
          <h2 className="expense__title">{title}</h2>
          <p className="expense__price">${props.amount}</p>
        </div>
        <button onClick={btnHandler}>change title</button>
      </Card>
    </>
  )
}

export default ExpenseItem;
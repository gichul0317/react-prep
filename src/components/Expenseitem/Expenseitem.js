import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
// import { useState } from 'react';
import '../Expenseitem/Expenseitem.scss';

function ExpenseItem(props) {
  // const [title, SetTitle] = useState({
  //   activeObject: null,
  //   objects: [...props.data],
  // });
  // const [clicked, SetClicked] = useState({});

  // const btnHandler = (index) => {
  //   SetTitle({ ...title, activeObject: title.objects[index] });
  //   console.log(title);
  //   // {title.objects[i] === title.activeObject ? 'updated' : props.data.title}
  // }

  // const setTitle = (index) => {
  //   SetClicked(prevState => ({
  //     ...prevState,
  //     [index]: !prevState[index]
  //   }));
  //   console.log(clicked);
  // }
  const month = props.date.toLocaleString('en-us', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-us', { day: '2-digit' })

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate
          month={month}
          year={year}
          day={day} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <p className="expense-item__price">${props.amount}</p>
        </div>
        {/* <button onClick={() => { setTitle(i) }}>Change title</button> */}
      </Card>
    </li>
  )
}

export default ExpenseItem;
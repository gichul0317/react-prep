import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import { useState } from 'react';
import '../Expenseitem/Expenseitem.scss';

function ExpenseItem(props) {
  const expenseData = [...props.data];
  const [title, SetTitle] = useState({
    activeObject: null,
    objects: [...props.data],
  });
  const [clicked, SetClicked] = useState({});

  const btnHandler = (index) => {
    SetTitle({ ...title, activeObject: title.objects[index] });
    console.log(title);
    // {title.objects[i] === title.activeObject ? 'updated' : props.data.title}
  }

  const setTitle = (index) => {
    SetClicked(item => ({
      ...item,
      [index]: !item[index]
    }));
    console.log(clicked);
  }

  return (
    <>
      {
        expenseData.map((item, i) => {
          const month = item.date.toLocaleString('en-us', { month: 'long' });
          const year = item.date.getFullYear();
          const day = item.date.toLocaleString('en-us', { day: '2-digit' })

          return (
            <Card className="expense-item" key={i}>
              <ExpenseDate month={month} year={year} day={day} />
              <div className="expense-item__description">
                <h2>{clicked[i] ? 'updated' : item.title}</h2>
                <p className="expense-item__price">${item.amount}</p>
              </div>
              <button onClick={() => { setTitle(i) }}>Change title</button>
            </Card>
          )
        })
      }
    </>
  )
}

export default ExpenseItem;
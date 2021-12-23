import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import { useState } from 'react';
import '../Expenseitem/Expenseitem.scss';

function ExpenseItem(props) {
  const expenseData = [...props.data];

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
                <h2>{item.title}</h2>
                <p className="expense-item__price">${item.amount}</p>
              </div>
            </Card>
          )
        })
      }
    </>
  )
}

export default ExpenseItem;
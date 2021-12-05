import '../Expenseitem/Expenseitem.scss';

function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const date = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <>
      <section className="expense">
        <div className="expense__date">
          <div>{month}</div>
          <div>{date}</div>
          <div>{year}</div>
        </div>
        <div className="expense__description">
          <h2 className="expense__title">{props.title}</h2>
          <p className="expense__price">${props.amount}</p>
        </div>
      </section>
    </>
  )
}

export default ExpenseItem;
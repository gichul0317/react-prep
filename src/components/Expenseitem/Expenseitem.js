import '../Expenseitem/Expenseitem.scss';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

function ExpenseItem(props) {
  return (
    <>
      <section className="expense">
        <ExpenseDate
          date={props.date}
        />
        <div className="expense__description">
          <h2 className="expense__title">{props.title}</h2>
          <p className="expense__price">${props.amount}</p>
        </div>
      </section>
    </>
  )
}

export default ExpenseItem;
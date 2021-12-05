import ExpenseItem from '../Expenseitem/Expenseitem';
import '../ExpenseDisplay/ExpenseDisplay.scss';

function ExpenseDisplay(props) {
  const renderArr = function (item) {
    let rendering = item.map(res => {
      console.log(res);
      return (
        <ExpenseItem
          key={res.id}
          title={res.title}
          amount={res.amount}
          date={res.date}
        />
      )
    })
    return rendering;
  }

  return (
    <div className="expenses">
      {/* <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      /> */}
      {
        renderArr(props.item)
      }

    </div>
  )

}

export default ExpenseDisplay;
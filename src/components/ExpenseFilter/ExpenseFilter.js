import './ExpenseFilter.scss';

function ExpenseFilter(props) {

  const valueHandler = (e) => {
    props.onChangeFilter(e.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="select">Filter by year</label>
        <select value={props.selected} name="select"
          id="select" onChange={valueHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter;
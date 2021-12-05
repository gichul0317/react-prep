import './Todo.scss';

function Todo(props) {
  console.log(props);

  const todoObj = [
    {
      title: 'Todo List',
      text: 'go to walk',
    },
    {
      title: 'Todo List',
      text: 'eat fresh',
    }
  ];

  const renderCard = (item) => {
    let renderList = item.map(cards => {
      return (
        <div className="todo__list">
          <h2>{cards.title}</h2>
          <p>{cards.text}</p>
        </div>
      )
    })
    return renderList;
  }
  return (
    <section className="todo">
      {renderCard(todoObj)}
    </section>
  )
}

export default Todo;
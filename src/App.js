import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Todo from './components/Todo/Todo';
import './partials/_setup.scss';

function App() {
  return (
    <div className="App">
      <Todo
        title={'Todo List'}
        subtext={'hello from app'}
      />
    </div>
  );
}

export default App;

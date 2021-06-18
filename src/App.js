import logo from './logo.svg';
import './App.css';

window.foobar = null;

function Todo(props) {
  window.foobar = props;
  return (
  <li>
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>{props.item.text}</label>
      <button className="destroy"></button>
    </div>
  </li>
  );
}

function App() {
  const items = [
    {"text": "Rappel de Vaccin"},
    {"text": "Faire courses"},
    {"text": "Rappeler plombier"},
  ];

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autofocus />
        </header>
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label for="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {items.map((item) => {
              return (
                <Todo item={item}/>
              );
            })}
            
          </ul>
          <footer className="footer">
            <span class="todo-count"></span>
            <ul class="filters">
              <li>
                <a href="#/" class="selected">All</a>
              </li>
              <li>
              <a href="#/active">Active</a>
              </li>
              <li>
              <a href="#/completed">Completed</a>
              </li>
            </ul>
            <button class="clear-completed">Clear completed</button>
          </footer>
        </section>
      </section>
      
			
    </div>
  );
}

export default App;

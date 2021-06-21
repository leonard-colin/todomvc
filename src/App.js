import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

window.foobar = null;

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

function generateItem(text) {
  return {text: text, id: uuidv4()}
}

function Todo(props) {

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
  const [items, setItems] = useState([]);
  window.foobar = items;
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
                <Todo key={item.id} item={item}/>
              );
            })}
            
          </ul>
          <footer className="footer">
            <span className="todo-count"></span>
            <ul className="filters">
              <li>
                <a href="#/" class="selected">All</a>
              </li>
              <li>
              <a href="#/active" onClick={(event) => {
                event.preventDefault();
                let newItems = items.slice()
                newItems.push(generateItem("blabla3"));
                setItems(newItems);
              }}>
                Active</a>
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

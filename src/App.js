import logo from './logo.svg';
import './App.css';

function App() {
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
				<ul class="todo-list"></ul>
        <footer class="footer">
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

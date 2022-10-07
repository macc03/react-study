import TaskList from "./TaskList"

const { useState, useReducer, StrictMode } = React

const App = () => {
  const [list, setList] = useState([1,2])
  console.log(StrictMode)
  return (
    <div className="todos">
      <h2>Todos</h2>
      <div className="header">
        <input className="add_input" type="text" placeholer="Add todo" />
        <button>Submit</button>
      </div>
      <TaskList list={list} />
    </div>
  )
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app')
)
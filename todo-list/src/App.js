import { useReducer } from 'react'
import AddInput from './AddInput';
import TaskList from './TaskList';


function taskReducer(tasks, actions) {
  switch (actions.type) {
    case 'Add':
      return [
        ...tasks,
        { id: tasks.length, text: actions.text, done: false }
      ];
    case 'Edit':
      return tasks.map(t => {
        if (t.id === actions.task.id) {
          return actions.task
        } else {
          return t
        }
      });
    case 'Delete': 
      return tasks.filter(t => t.id !== actions.id)
  }
  return tasks
}

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

  function handleAddTask (text) {
    dispatch({
      type: 'Add',
      text,
    })
  }

  function handleEditTask ({id, text, done}) {
    dispatch({
      type: 'Edit',
      task: {id, text, done}
    })
  }

  function handleDelTask (id) {
    dispatch({
      type: 'Delete',
      id
    })
  }

  return (
    <div className="todos">
      <h2>Todos</h2>
      <div className="header">
        <AddInput onAddTask={handleAddTask} />
      </div>
      <TaskList list={tasks} onEditTask={handleEditTask} onDelTask={handleDelTask} />
    </div>
  )
}

const initialTasks = [
  { id: 0, text: '听音乐🎵', done: true },
  { id: 1, text: '看电影', done: false }
]

export default App;

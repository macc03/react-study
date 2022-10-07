import { useState } from "react"

export default function TaskList({ list, onEditTask, onDelTask }) {
  return (
    list.map((item, index) => <List key={index} onEditTask={onEditTask} onDelTask={onDelTask} {...item} />)
  )
}

function List({ id, text, done, onEditTask, onDelTask }) {
  const [isEditing, setEditing] = useState(false)
  const [edit_text, setEdit_text] = useState('')

  return (
    <div className="todo_item">
      <input type="checkbox" checked={done} onChange={() => onEditTask({ id, text, done: !done })} />
      {
        isEditing
          ? <>
            <input type="text" value={edit_text} onInput={e => setEdit_text(e.target.value)} name="edit_text" id="edit_text" />
            <button onClick={() => {setEditing(false); onEditTask({id, text: edit_text, done})}}>save</button>
          </>
          : <>
            {done
              ? <>
                <del>{text}</del>
              </>
              : <span>{text}</span>
            }
            <button onClick={() => {setEditing(true);setEdit_text(text)}}>Edit</button>
            <button onClick={() => onDelTask(id)}>delete</button>
          </>
      }
    </div>
  )
}


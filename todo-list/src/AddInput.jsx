import { useState } from "react"

export default function AddInput({ onAddTask }) {
  const [text, setText] = useState('')

  return (
    <>
      <input className="add_input" value={text} onChange={e => setText(e.target.value)} type="text" name="add_text" id="add_text" />
      <button onClick={() => { onAddTask(text); setText('') }}>添加</button>
    </>
  )
}
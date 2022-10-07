export default function TaskList({ list }) {
  console.log(list)
  return (
    {
      list.map((item, index) => {
        return (
          <List />
        )
      })
    }
  )
}

function List() {
  return (
    <div className="todo_item">
      <input type="checkbox" />
      <span>Task #1</span>
    </div>
  )
}
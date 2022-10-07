const { useReducer } = React

function reducer(state, action) {
  return {
    ...state,
    [action.field]: action.value
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, {
    username: 'Jone',
    password: '123456'
  })

  return (
    <div className="react-form">
      <div>Login In</div>
      <input type="text" value={state.username} onChange={e => dispatch({
        field: 'username',
        value: e.target.value
      })} placeholder="Enter Username" />
      <input type="text" value={state.password} onChange={e => dispatch({
        field: 'password',
        value: e.target.value
      })} placeholder="Enter Password" />
      <button onClick={() => console.log(state)}>Confirm</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
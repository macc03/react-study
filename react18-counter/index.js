'use strict'

import { debounce } from "./debounce"

const typeFn = (e) => {
  console.log(e.target.value)
}

const onInputType = debounce(typeFn, 2000)

const { useState, useEffect } = React

const Counter = ({ changeNumber }) => {
  return (
    <div className="counter">
      <div onClick={(e) => {changeNumber(-1);e.currentTarget.classList.add('anim')}} data-text="-" className="decrement"><span>-</span></div>
      <div onClick={(e) => {changeNumber(1);e.currentTarget.classList.add('anim')}} data-text="+" className='increment'><span>+</span></div>
    </div>
  )
}

const App = () => {
  const [total, setTotal] = useState(0)
  const changeNumber = value => setTotal(total + value)
  const [addNumber, setAddNumber] = useState(0)

  useEffect(() => {
    console.log(total)
  }, [total])

  return (
    <div className="container">
      <div className="total_wrap">
        <div className='total_number'>
          {total}
          <div className="add_number">+{addNumber}</div>
        </div>
      </div>
      <Counter changeNumber={changeNumber} />
    </div>
  )
}

// ReactDOM.render(<App />, document.getElementById('app'))
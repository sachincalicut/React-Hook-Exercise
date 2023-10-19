import React, { Fragment, useState } from 'react'

function CounterUp() {
    const [count , setCount] = useState(0);
    // Function Increment 
    function Increment(){
        setCount(count +1);
    }
     // Function Decrement
     function Decrement(){
        setCount(count -1);
    }

  return (
    <Fragment>
        <div>{count}</div>
        <button type="button" onClick={Increment}>+</button>
        <button type="button" onClick={Decrement}>-</button>
    </Fragment>
  )
}

export default CounterUp
